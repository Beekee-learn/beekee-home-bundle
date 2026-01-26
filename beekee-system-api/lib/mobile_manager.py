"""
Mobile/Modem Manager
Handles mobile connectivity: operator, signal, SIM, APN
"""

import os
from lib.base_manager import BaseManager
from lib.mock_data import get_mock


class MobileManager(BaseManager):
    """Manager for mobile/modem operations"""
    
    def __init__(self, scripts_path=None):
        super().__init__()
        self.scripts_path = scripts_path or '/home/beekee/scripts'
    
    # =========================================================================
    # MODEM STATUS
    # =========================================================================
    
    def get_modem_status(self):
        """Get complete modem status"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'available': get_mock('mobile', 'available'),
                'operator': get_mock('mobile', 'operator'),
                'state': 'connected' if get_mock('mobile', 'available') else 'disconnected'
            }
        
        try:
            result = self.run_command("mmcli -L 2>/dev/null")
            if not result['success'] or 'No modems' in result['output']:
                return {
                    'success': True,
                    'mock': False,
                    'available': False,
                    'message': 'No modem detected'
                }
            
            # Get operator
            operator_result = self.run_command(
                "mmcli -m 0 2>/dev/null | grep -i 'operator-name' | awk -F\"'\" '{print $2}'"
            )
            
            # Get state
            state_result = self.run_command(
                "mmcli -m 0 2>/dev/null | grep -i 'state' | head -1 | awk -F\"'\" '{print $2}'"
            )
            
            return {
                'success': True,
                'mock': False,
                'available': True,
                'operator': operator_result['output'] if operator_result['success'] else None,
                'state': state_result['output'] if state_result['success'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # OPERATOR
    # =========================================================================
    
    def get_operator_name(self):
        """Get mobile operator name"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'operator': get_mock('mobile', 'operator')
            }
        
        try:
            result = self.run_command(
                "mmcli -m 0 2>/dev/null | grep -i 'operator-name' | awk -F\"'\" '{print $2}'"
            )
            return {
                'success': True,
                'mock': False,
                'operator': result['output'] if result['success'] and result['output'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # SIGNAL STRENGTH
    # =========================================================================
    
    def get_signal_strength(self):
        """Get mobile signal strength"""
        if self.mock_mode:
            signal = get_mock('mobile', 'signal')
            return {
                'success': True,
                'mock': True,
                'rssi': signal.get('rssi'),
                'percentage': signal.get('percentage'),
                'quality': signal.get('quality'),
                'unit': 'dBm'
            }
        
        try:
            # Try qmicli
            result = self.run_command(
                "sudo qmicli --device=/dev/cdc-wdm0 --nas-get-signal-strength 2>/dev/null | "
                "grep -m1 'Network' | awk '{print $3}'"
            )
            
            if result['success'] and result['output']:
                try:
                    rssi = int(result['output'].replace("'", ""))
                    percentage = min(100, max(0, int((rssi + 110) * 100 / 60)))
                    
                    if rssi >= -70:
                        quality = 'Excellent'
                    elif rssi >= -85:
                        quality = 'Good'
                    elif rssi >= -100:
                        quality = 'Fair'
                    else:
                        quality = 'Poor'
                    
                    return {
                        'success': True,
                        'mock': False,
                        'rssi': rssi,
                        'percentage': percentage,
                        'quality': quality,
                        'unit': 'dBm'
                    }
                except ValueError:
                    pass
            
            # Fallback: mmcli
            result = self.run_command(
                "mmcli -m 0 --signal-get 2>/dev/null | grep -i 'rssi' | head -1 | awk '{print $3}'"
            )
            
            rssi = None
            percentage = None
            quality = 'Unknown'
            
            if result['success'] and result['output']:
                try:
                    rssi = float(result['output'].replace('dBm', '').strip())
                    percentage = min(100, max(0, int((rssi + 110) * 100 / 60)))
                    
                    if rssi >= -70:
                        quality = 'Excellent'
                    elif rssi >= -85:
                        quality = 'Good'
                    elif rssi >= -100:
                        quality = 'Fair'
                    else:
                        quality = 'Poor'
                except:
                    pass
            
            return {
                'success': True,
                'mock': False,
                'rssi': rssi,
                'percentage': percentage,
                'quality': quality,
                'unit': 'dBm'
            }
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # SIM CARD
    # =========================================================================
    
    def get_sim_status(self):
        """Get SIM card status"""
        if self.mock_mode:
            sim = get_mock('mobile', 'sim')
            return {
                'success': True,
                'mock': True,
                'status': sim.get('status'),
                'available': sim.get('available')
            }
        
        try:
            result = self.run_command(
                "mmcli -m 0 2>/dev/null | grep -i 'state' | head -1 | awk -F\"'\" '{print $2}'"
            )
            
            status = result['output'].strip() if result['success'] else 'unknown'
            
            return {
                'success': True,
                'mock': False,
                'status': status,
                'available': status not in ['unknown', '', 'failed', 'disabled']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def get_sim_pin_status(self):
        """Get SIM PIN status"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'pin_enabled': get_mock('mobile', 'sim', 'pin_enabled')
            }
        
        try:
            result = self.run_command("mmcli -i 0 2>/dev/null | grep -i 'enabled'")
            return {
                'success': True,
                'mock': False,
                'pin_enabled': 'yes' in result['output'].lower() if result['success'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def set_sim_pin(self, pin):
        """Set SIM PIN"""
        # Validate PIN
        if not str(pin).isdigit() or len(str(pin)) < 4 or len(str(pin)) > 8:
            return {'success': False, 'error': 'PIN must be 4-8 digits'}
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would set PIN'
            }
        
        try:
            result = self.run_command(f"mmcli -i 0 --pin={pin}")
            return {
                'success': result['success'],
                'mock': False,
                'message': 'PIN set successfully' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # APN
    # =========================================================================
    
    def get_apn(self):
        """Get APN settings"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'apn': get_mock('mobile', 'apn', 'apn')
            }
        
        try:
            result = self.run_command("sudo nmcli -g gsm.apn connection show 'Mobile' 2>/dev/null")
            return {
                'success': True,
                'mock': False,
                'apn': result['output'] if result['success'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def get_apn_user(self):
        """Get APN username"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'user': get_mock('mobile', 'apn', 'user')
            }
        
        try:
            result = self.run_command("sudo nmcli -g gsm.username connection show 'Mobile' 2>/dev/null")
            return {
                'success': True,
                'mock': False,
                'user': result['output'] if result['success'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def get_apn_password(self):
        """Get APN password"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'password': get_mock('mobile', 'apn', 'password')
            }
        
        try:
            result = self.run_command("sudo nmcli -g gsm.password connection show 'Mobile' 2>/dev/null")
            return {
                'success': True,
                'mock': False,
                'password': result['output'] if result['success'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def set_apn(self, apn, user=None, password=None):
        """Set APN settings"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'apn': apn,
                'message': 'Mock - would set APN'
            }
        
        try:
            result = self.run_command(f"sudo nmcli connection modify 'Mobile' gsm.apn '{apn}'")
            if not result['success']:
                return {'success': False, 'error': 'Failed to set APN'}
            
            if user:
                self.run_command(f"sudo nmcli connection modify 'Mobile' gsm.username '{user}'")
            
            if password:
                self.run_command(f"sudo nmcli connection modify 'Mobile' gsm.password '{password}'")
            
            return {
                'success': True,
                'mock': False,
                'apn': apn,
                'message': 'APN settings updated'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # CONNECTION MANAGEMENT
    # =========================================================================
    
    def restart_connection(self):
        """Restart mobile connection"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would restart mobile connection'
            }
        
        try:
            script_path = os.path.join(self.scripts_path, 'mobile_connect.sh')
            
            if os.path.exists(script_path):
                result = self.run_command(f'sudo bash {script_path}', timeout=60)
            else:
                self.run_command("sudo nmcli connection down 'Mobile' 2>/dev/null || true")
                result = self.run_command("sudo nmcli connection up 'Mobile'", timeout=30)
            
            return {
                'success': result['success'],
                'mock': False,
                'message': 'Mobile connection restarted' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}