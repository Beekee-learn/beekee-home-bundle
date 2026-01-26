"""
Mock data for development on Mac
These values simulate what the Raspberry Pi would return
"""

MOCK_DATA = {
    # System
    'system': {
        'serial': 'BEEKEE-DEV-001',
        'os_version': '20241015',
        'home_version': '2.5.0',
        'online': True,
        'disk': {
            'percentage': 58,
            'total': '29.5G',
            'used': '17.1G',
            'available': '12.4G',
            'filesystem': '/dev/mmcblk0p2',
            'mount_point': '/'
        },
        'battery': {
            'available': True,
            'status_error': 'NO_ERROR',
            'is_fault': False,
            'battery_status': 'CHARGING_FROM_IN',
            'power_input_status': 'PRESENT',
            'charge_level_error': 'NO_ERROR',
            'charge_level': 78,
            'voltage': 4.12
        }
    },
    
    # Network
    'network': {
        'eth0': {'ip': '192.168.1.50', 'available': True},
        'wlan0': {'ip': '10.0.0.1', 'available': True},
        'wwan0': {'ip': None, 'available': False},
        'internet_interface': 'eth0',
        'sharing': {
            'ethernet': {'enabled': False},
            'mobile': {'enabled': False}
        }
    },
    
    # WiFi
    'wifi': {
        'ssid': 'BeekeeBox-Dev',
        'password': 'beekeepass',
        'channel': 6
    },
    
    # Mobile/Modem
    'mobile': {
        'available': False,
        'operator': 'Mock Operator',
        'signal': {
            'rssi': -75,
            'percentage': 58,
            'quality': 'Good'
        },
        'sim': {
            'status': 'ready',
            'available': True,
            'pin_enabled': False
        },
        'apn': {
            'apn': 'internet',
            'user': '',
            'password': ''
        }
    },
    
    # Services/Sync
    'services': {
        'remote': {'active': False},
        'autosync': {'enabled': False}
    },
    
    'sync': {
        'share_internet_ethernet': False,
        'share_internet_mobile': False
    }
}


def get_mock(category, *keys):
    """
    Get mock value by category and keys
    Example: get_mock('system', 'battery', 'charge_level') -> 78
    """
    data = MOCK_DATA.get(category)
    for key in keys:
        if isinstance(data, dict):
            data = data.get(key)
        else:
            return None
    return data