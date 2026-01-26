"""
Network Manager
Handles network operations: IP addresses, interfaces, internet sharing
"""

import re
from lib.base_manager import BaseManager
from lib.mock_data import get_mock


class NetworkManager(BaseManager):
    """Manager for network operations"""
    
    ALLOWED_INTERFACES = ['eth0', 'wlan0', 'wwan0', 'usb0', 'lo']
    
    # =========================================================================
    # IP ADDRESSES
    # =========================================================================
    
    def get_interface_ip(self, interface):
        """
        Get IP address for a specific interface
        Replaces: getEth0IP(), getWwan0IP() in methods.js
        """
        if interface not in self.ALLOWED_INTERFACES:
            return {'success': False, 'error': 'Invalid interface'}
        
        if self.mock_mode:
            mock_data = get_mock('network', interface)
            return {
                'success': True,
                'mock': True,
                'interface': interface,
                'ip': mock_data.get('ip') if mock_data else None,
                'available': mock_data.get('available', False) if mock_data else False
            }
        
        try:
            result = self.run_command(
                f"ip -4 addr show {interface} 2>/dev/null | grep -oP '(?<=inet\\s)\\d+(\\.\\d+){{3}}'"
            )
            
            ip = result['output'] if result['success'] and result['output'] else None
            
            return {
                'success': True,
                'mock': False,
                'interface': interface,
                'ip': ip,
                'available': ip is not None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def get_all_interfaces(self):
        """Get all network interfaces with their IPs"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'interfaces': {
                    'eth0': [get_mock('network', 'eth0', 'ip')],
                    'wlan0': [get_mock('network', 'wlan0', 'ip')],
                    'lo': ['127.0.0.1']
                }
            }
        
        try:
            result = self.run_command("ip -o addr show | awk '{print $2, $4}'")
            
            interfaces = {}
            if result['success']:
                for line in result['output'].split('\n'):
                    if line:
                        parts = line.split()
                        if len(parts) >= 2:
                            iface = parts[0]
                            ip = parts[1].split('/')[0] if '/' in parts[1] else parts[1]
                            if iface not in interfaces:
                                interfaces[iface] = []
                            interfaces[iface].append(ip)
            
            return {'success': True, 'mock': False, 'interfaces': interfaces}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # INTERNET INTERFACE
    # =========================================================================
    
    def get_internet_interface(self):
        """
        Get the interface currently used for internet
        Replaces: getInternetInterface() in methods.js
        """
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'interface': get_mock('network', 'internet_interface')
            }
        
        try:
            result = self.run_command("ip route | grep default | awk '{print $5}' | head -1")
            return {
                'success': True,
                'mock': False,
                'interface': result['output'] if result['success'] and result['output'] else None
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # INTERNET SHARING - ETHERNET
    # =========================================================================
    
    def get_sharing_ethernet_status(self):
        """Get internet sharing status via ethernet"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'enabled': get_mock('network', 'sharing', 'ethernet', 'enabled')
            }
        
        try:
            result = self.run_command(
                "sudo iptables -t nat -L POSTROUTING -n 2>/dev/null | grep -q 'MASQUERADE.*eth0' && echo 'enabled' || echo 'disabled'"
            )
            return {
                'success': True,
                'mock': False,
                'enabled': result['output'] == 'enabled' if result['success'] else False
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def enable_sharing_ethernet(self):
        """Enable internet sharing via ethernet"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would enable ethernet sharing'
            }
        
        try:
            commands = [
                "sudo sysctl -w net.ipv4.ip_forward=1",
                "sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE",
                "sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT",
                "sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT"
            ]
            
            for cmd in commands:
                result = self.run_command(cmd)
                if not result['success']:
                    return {'success': False, 'error': f'Failed: {cmd}'}
            
            return {'success': True, 'mock': False, 'message': 'Internet sharing via Ethernet enabled'}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def disable_sharing_ethernet(self):
        """Disable internet sharing via ethernet"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would disable ethernet sharing'
            }
        
        try:
            commands = [
                "sudo iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE 2>/dev/null || true",
                "sudo iptables -D FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || true",
                "sudo iptables -D FORWARD -i wlan0 -o eth0 -j ACCEPT 2>/dev/null || true"
            ]
            
            for cmd in commands:
                self.run_command(cmd)
            
            return {'success': True, 'mock': False, 'message': 'Internet sharing via Ethernet disabled'}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # INTERNET SHARING - MOBILE
    # =========================================================================
    
    def get_sharing_mobile_status(self):
        """Get internet sharing status via mobile"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'enabled': get_mock('network', 'sharing', 'mobile', 'enabled')
            }
        
        try:
            result = self.run_command(
                "sudo iptables -t nat -L POSTROUTING -n 2>/dev/null | grep -q 'MASQUERADE.*wwan0' && echo 'enabled' || echo 'disabled'"
            )
            return {
                'success': True,
                'mock': False,
                'enabled': result['output'] == 'enabled' if result['success'] else False
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def enable_sharing_mobile(self):
        """Enable internet sharing via mobile"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would enable mobile sharing'
            }
        
        try:
            commands = [
                "sudo sysctl -w net.ipv4.ip_forward=1",
                "sudo iptables -t nat -A POSTROUTING -o wwan0 -j MASQUERADE",
                "sudo iptables -A FORWARD -i wwan0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT",
                "sudo iptables -A FORWARD -i wlan0 -o wwan0 -j ACCEPT"
            ]
            
            for cmd in commands:
                result = self.run_command(cmd)
                if not result['success']:
                    return {'success': False, 'error': f'Failed: {cmd}'}
            
            return {'success': True, 'mock': False, 'message': 'Internet sharing via Mobile enabled'}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def disable_sharing_mobile(self):
        """Disable internet sharing via mobile"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would disable mobile sharing'
            }
        
        try:
            commands = [
                "sudo iptables -t nat -D POSTROUTING -o wwan0 -j MASQUERADE 2>/dev/null || true",
                "sudo iptables -D FORWARD -i wwan0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT 2>/dev/null || true",
                "sudo iptables -D FORWARD -i wlan0 -o wwan0 -j ACCEPT 2>/dev/null || true"
            ]
            
            for cmd in commands:
                self.run_command(cmd)
            
            return {'success': True, 'mock': False, 'message': 'Internet sharing via Mobile disabled'}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # MAC FILTERING
    # =========================================================================
    
    def validate_mac_address(self, mac):
        """Validate MAC address format"""
        return bool(re.match(r'^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$', mac))
    
    def allow_mac_ethernet(self, mac):
        """Allow specific MAC address for internet via ethernet"""
        if not self.validate_mac_address(mac):
            return {'success': False, 'error': 'Invalid MAC address format'}
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'mac': mac,
                'message': f'Mock - would allow MAC {mac}'
            }
        
        try:
            result = self.run_command(f"sudo iptables -A FORWARD -m mac --mac-source {mac} -o eth0 -j ACCEPT")
            return {
                'success': result['success'],
                'mock': False,
                'mac': mac,
                'message': 'MAC address allowed' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def allow_mac_mobile(self, mac):
        """Allow specific MAC address for internet via mobile"""
        if not self.validate_mac_address(mac):
            return {'success': False, 'error': 'Invalid MAC address format'}
        
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'mac': mac,
                'message': f'Mock - would allow MAC {mac}'
            }
        
        try:
            result = self.run_command(f"sudo iptables -A FORWARD -m mac --mac-source {mac} -o wwan0 -j ACCEPT")
            return {
                'success': result['success'],
                'mock': False,
                'mac': mac,
                'message': 'MAC address allowed' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def clear_mac_filters_ethernet(self):
        """Remove all MAC filters for ethernet"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would clear MAC filters'
            }
        
        try:
            self.run_command("sudo iptables -F FORWARD 2>/dev/null || true")
            return {'success': True, 'mock': False, 'message': 'All MAC filters cleared'}
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def clear_mac_filters_mobile(self):
        """Remove all MAC filters for mobile"""
        return self.clear_mac_filters_ethernet()  # Same command