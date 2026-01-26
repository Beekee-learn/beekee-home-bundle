"""
WiFi Manager
Handles WiFi configuration: SSID, password, channel
"""

import os
import re
from lib.base_manager import BaseManager
from lib.mock_data import get_mock


class WifiManager(BaseManager):
    """Manager for WiFi operations"""
    
    def __init__(self, settings_path=None):
        super().__init__()
        self.settings_path = settings_path or '/home/beekee/.wifisettings'
    
    # =========================================================================
    # HELPER METHODS
    # =========================================================================
    
    def _read_setting(self, key):
        """Read a setting from the wifi settings file"""
        if self.mock_mode:
            return None
        
        try:
            if os.path.exists(self.settings_path):
                with open(self.settings_path, 'r') as f:
                    for line in f:
                        if line.startswith(f'{key}='):
                            return line.split('=', 1)[1].strip()
            return None
        except Exception:
            return None
    
    def _write_setting(self, key, value):
        """Write a setting to the wifi settings file"""
        if self.mock_mode:
            return True
        
        try:
            lines = []
            found = False
            
            if os.path.exists(self.settings_path):
                with open(self.settings_path, 'r') as f:
                    lines = f.readlines()
            
            new_lines = []
            for line in lines:
                if line.startswith(f'{key}='):
                    new_lines.append(f'{key}={value}\n')
                    found = True
                else:
                    new_lines.append(line)
            
            if not found:
                new_lines.append(f'{key}={value}\n')
            
            with open(self.settings_path, 'w') as f:
                f.writelines(new_lines)
            
            return True
        except Exception:
            return False
    
    # =========================================================================
    # SSID
    # =========================================================================
    
    def get_ssid(self):
        """Get current WiFi SSID"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'ssid': get_mock('wifi', 'ssid')
            }
        
        try:
            ssid = self._read_setting('SSID')
            return {
                'success': True,
                'mock': False,
                'ssid': ssid
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def set_ssid(self, ssid):
        """Set WiFi SSID"""
        # Validate
        if not ssid or not ssid.strip():
            return {'success': False, 'error': 'SSID cannot be empty'}
        if len(ssid) > 32:
            return {'success': False, 'error': 'SSID cannot exceed 32 characters'}
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'ssid': ssid,
                'message': 'Mock - would set SSID'
            }
        
        try:
            if self._write_setting('SSID', ssid):
                return {
                    'success': True,
                    'mock': False,
                    'ssid': ssid,
                    'message': 'SSID updated. Restart WiFi to apply changes.'
                }
            return {'success': False, 'error': 'Failed to write settings'}
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # PASSWORD
    # =========================================================================
    
    def get_password(self):
        """Get current WiFi password"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'password': get_mock('wifi', 'password')
            }
        
        try:
            password = self._read_setting('PASSWORD')
            return {
                'success': True,
                'mock': False,
                'password': password
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def set_password(self, password):
        """Set WiFi password"""
        # Validate (WPA2 requires 8-63 characters)
        if len(password) < 8:
            return {'success': False, 'error': 'Password must be at least 8 characters'}
        if len(password) > 63:
            return {'success': False, 'error': 'Password cannot exceed 63 characters'}
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would set password'
            }
        
        try:
            if self._write_setting('PASSWORD', password):
                return {
                    'success': True,
                    'mock': False,
                    'message': 'Password updated. Restart WiFi to apply changes.'
                }
            return {'success': False, 'error': 'Failed to write settings'}
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # CHANNEL
    # =========================================================================
    
    def get_channel(self):
        """Get current WiFi channel"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'channel': get_mock('wifi', 'channel')
            }
        
        try:
            channel = self._read_setting('CHANNEL')
            return {
                'success': True,
                'mock': False,
                'channel': int(channel) if channel else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def set_channel(self, channel):
        """Set WiFi channel"""
        # Validate
        try:
            channel = int(channel)
        except (ValueError, TypeError):
            return {'success': False, 'error': 'Channel must be a number'}
        
        if channel < 1 or channel > 13:
            return {'success': False, 'error': 'Channel must be between 1 and 13'}
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'channel': channel,
                'message': 'Mock - would set channel'
            }
        
        try:
            if self._write_setting('CHANNEL', str(channel)):
                return {
                    'success': True,
                    'mock': False,
                    'channel': channel,
                    'message': 'Channel updated. Restart WiFi to apply changes.'
                }
            return {'success': False, 'error': 'Failed to write settings'}
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # RESTART HOSTAPD
    # =========================================================================
    
    def restart_hostapd(self):
        """Restart hostapd service to apply WiFi changes"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would restart hostapd'
            }
        
        try:
            # First apply settings from .wifisettings to hostapd.conf
            result = self.run_command(
                "sudo python3 /home/beekee/scripts/change_wifi_settings.py",
                timeout=30
            )
            
            if not result['success']:
                return {'success': False, 'error': f"Failed to apply settings: {result['error']}"}
            
            # Restart hostapd
            result = self.run_command("sudo systemctl restart hostapd", timeout=30)
            
            if result['success']:
                return {
                    'success': True,
                    'mock': False,
                    'message': 'WiFi restarted successfully'
                }
            return {'success': False, 'error': result['error']}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
