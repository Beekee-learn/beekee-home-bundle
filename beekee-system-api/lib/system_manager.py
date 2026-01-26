"""
System Manager
Handles system operations: disk, battery, versions, power management
"""

import json
import os
from lib.base_manager import BaseManager
from lib.mock_data import get_mock


class SystemManager(BaseManager):
    """Manager for system operations"""
    
    def __init__(self, config_path=None, scripts_path=None, version_path=None):
        super().__init__()
        self.config_path = config_path or '/boot/beekee/beekee.conf'
        self.scripts_path = scripts_path or '/home/beekee/scripts'
        self.version_path = version_path or '/home/beekee/beekee-home/private/version.json'
    
    # =========================================================================
    # DISK USAGE
    # =========================================================================
    
    def get_disk_usage(self):
        """
        Get disk usage information
        Replaces: getUsedSpace() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                **get_mock('system', 'disk')
            }
        
        try:
            # Get percentage
            result_pcent = self.run_command("df / | awk 'NR==2 {print $5}' | tr -d '%'")
            
            # Get detailed info
            result_detail = self.run_command("df -h / | tail -1")
            
            if result_detail['success']:
                parts = result_detail['output'].split()
                return {
                    'success': True,
                    'mock': False,
                    'percentage': int(result_pcent['output']) if result_pcent['success'] and result_pcent['output'] else None,
                    'filesystem': parts[0] if len(parts) > 0 else None,
                    'total': parts[1] if len(parts) > 1 else None,
                    'used': parts[2] if len(parts) > 2 else None,
                    'available': parts[3] if len(parts) > 3 else None,
                    'mount_point': parts[5] if len(parts) > 5 else '/'
                }
            
            return {'success': False, 'error': 'Could not get disk usage'}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # VERSIONS
    # =========================================================================
    
    def get_os_version(self):
        """
        Get Beekee OS version
        Replaces: getBeekeeOsVersion() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'version': get_mock('system', 'os_version')
            }
        
        try:
            # Try multiple locations
            result = self.run_command(
                "cat /boot/beekee/beekee-version 2>/dev/null || "
                "grep 'BEEKEE_OS_VERSION=' /boot/beekee/beekee.conf 2>/dev/null | cut -d= -f2 || "
                "echo 'unknown'"
            )
            return {
                'success': True,
                'mock': False,
                'version': result['output'] if result['success'] else 'unknown'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def get_home_version(self):
        """
        Get Beekee Home version
        Replaces: getBeekeeHomeVersion() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'version': get_mock('system', 'home_version')
            }
        
        try:
            version_paths = [
                self.version_path,
                '/home/beekee/beekee-home/private/version.json',
                './private/version.json'
            ]
            
            for path in version_paths:
                if os.path.exists(path):
                    with open(path, 'r') as f:
                        data = json.load(f)
                        return {
                            'success': True,
                            'mock': False,
                            'version': data.get('version', 'unknown')
                        }
            
            return {'success': True, 'mock': False, 'version': 'unknown'}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # SERIAL NUMBER
    # =========================================================================
    
    def get_serial(self):
        """
        Get device serial number
        Replaces: getSerial() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'serial': get_mock('system', 'serial')
            }
        
        try:
            # Try config file first
            result = self.run_command(f"grep 'SERIAL=' {self.config_path} 2>/dev/null | cut -d= -f2")
            if result['success'] and result['output']:
                return {'success': True, 'mock': False, 'serial': result['output']}
            
            # Fallback to CPU serial
            result = self.run_command("cat /proc/cpuinfo | grep Serial | awk '{print $3}'")
            return {
                'success': True,
                'mock': False,
                'serial': result['output'] if result['success'] and result['output'] else 'unknown'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # BATTERY STATUS
    # =========================================================================
    
    def get_battery_status(self):
        """
        Get battery status
        Replaces: getBatteryStatus() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                **get_mock('system', 'battery')
            }
        
        try:
            # Try using the pijuice_status.py script
            script_path = os.path.join(self.scripts_path, 'pijuice_status.py')
            
            if os.path.exists(script_path):
                result = self.run_command(f'python3 {script_path}', timeout=10)
                if result['success'] and result['output']:
                    try:
                        data = json.loads(result['output'])
                        return {
                            'success': True,
                            'mock': False,
                            'available': True,
                            **data
                        }
                    except json.JSONDecodeError:
                        pass
            
            return {
                'success': True,
                'mock': False,
                'available': False,
                'message': 'Battery module not available'
            }
            
        except Exception as e:
            return {'success': False, 'available': False, 'error': str(e)}
    
    # =========================================================================
    # INTERNET STATUS
    # =========================================================================
    
    def is_online(self):
        """
        Check if system has internet connectivity
        Replaces: getIsOnline() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'online': get_mock('system', 'online')
            }
        
        try:
            # Try ping to Google DNS
            result = self.run_command('ping -c 1 -W 2 8.8.8.8', timeout=5)
            if result['success']:
                return {'success': True, 'mock': False, 'online': True}
            
            # Fallback: Cloudflare DNS
            result = self.run_command('ping -c 1 -W 2 1.1.1.1', timeout=5)
            return {'success': True, 'mock': False, 'online': result['success']}
            
        except Exception as e:
            return {'success': False, 'online': False, 'error': str(e)}
    
    # =========================================================================
    # POWER MANAGEMENT
    # =========================================================================
    
    def reboot(self):
        """
        Reboot the system
        Replaces: reboot() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock mode - would reboot system'
            }
        
        try:
            self.run_command('(sleep 2 && sudo reboot) &')
            return {
                'success': True,
                'mock': False,
                'message': 'System will reboot in 2 seconds...'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def shutdown(self):
        """
        Shutdown the system
        Replaces: shutdown() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock mode - would shutdown system'
            }
        
        try:
            self.run_command('(sleep 2 && sudo shutdown -h now) &')
            return {
                'success': True,
                'mock': False,
                'message': 'System will shutdown in 2 seconds...'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # COMMAND EXECUTION (with security)
    # =========================================================================
    
    ALLOWED_COMMANDS = [
        'df', 'free', 'uptime', 'cat /proc/cpuinfo', 'ip addr',
        'systemctl status', 'hostnamectl', 'uname', 'vcgencmd'
    ]
    
    def run_allowed_command(self, command):
        """
        Run a whitelisted command
        Replaces: runCommand() in methods.js (with security)
        """
        # Security check
        is_allowed = any(command.startswith(allowed) for allowed in self.ALLOWED_COMMANDS)
        
        if not is_allowed:
            return {
                'success': False,
                'error': 'Command not allowed for security reasons'
            }
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'output': f'Mock output for: {command}',
                'error': ''
            }
        
        result = self.run_command(command)
        return {
            'success': result['success'],
            'mock': False,
            'output': result['output'],
            'error': result['error']
        }