"""
Network Routes - Using NetworkManager
REST API endpoints for network management
Replaces all network-related cmd() calls in methods.js
"""

from flask import Blueprint, jsonify, request, current_app
from lib.network_manager import NetworkManager

bp = Blueprint('network', __name__, url_prefix='/api/v1/network')


def get_manager():
    """Get NetworkManager instance"""
    return NetworkManager()


# =============================================================================
# IP ADDRESSES
# =============================================================================

@bp.route('/ethernet/ip', methods=['GET'])
def get_eth0_ip():
    """
    Get Ethernet IP address
    Replaces: getEth0IP() in methods.js
    """
    manager = get_manager()
    result = manager.get_interface_ip('eth0')
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/mobile/ip', methods=['GET'])
def get_wwan0_ip():
    """
    Get Mobile/WWAN IP address
    Replaces: getWwan0IP() in methods.js
    """
    manager = get_manager()
    result = manager.get_interface_ip('wwan0')
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/wlan/ip', methods=['GET'])
def get_wlan0_ip():
    """Get WLAN IP address"""
    manager = get_manager()
    result = manager.get_interface_ip('wlan0')
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/interfaces', methods=['GET'])
def get_all_interfaces():
    """Get all network interfaces with their IPs"""
    manager = get_manager()
    result = manager.get_all_interfaces()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# INTERNET STATUS
# =============================================================================

@bp.route('/status', methods=['GET'])
def get_network_status():
    """
    Get complete network status
    Combines multiple checks into one response
    """
    manager = get_manager()
    
    eth0 = manager.get_interface_ip('eth0')
    wlan0 = manager.get_interface_ip('wlan0')
    wwan0 = manager.get_interface_ip('wwan0')
    internet = manager.get_internet_interface()
    
    return jsonify({
        'success': True,
        'mock': eth0.get('mock', False),
        'interfaces': {
            'eth0': eth0.get('ip'),
            'wlan0': wlan0.get('ip'),
            'wwan0': wwan0.get('ip')
        },
        'internet_interface': internet.get('interface')
    })


@bp.route('/interface', methods=['GET'])
def get_internet_interface():
    """
    Get the interface currently used for internet
    Replaces: getInternetInterface() in methods.js
    """
    manager = get_manager()
    result = manager.get_internet_interface()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# INTERNET SHARING - ETHERNET
# =============================================================================

@bp.route('/sharing/ethernet/status', methods=['GET'])
def get_sharing_ethernet_status():
    """
    Get internet sharing status via Ethernet
    Replaces: getInternetSharingStatusEthernet() in methods.js
    """
    manager = get_manager()
    result = manager.get_sharing_ethernet_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/sharing/ethernet/enable', methods=['POST'])
def enable_sharing_ethernet():
    """
    Enable internet sharing via Ethernet
    Replaces: enableInternetSharingEthernet() in methods.js
    """
    manager = get_manager()
    result = manager.enable_sharing_ethernet()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/sharing/ethernet/disable', methods=['POST'])
def disable_sharing_ethernet():
    """
    Disable internet sharing via Ethernet
    Replaces: disableInternetSharingEthernet() in methods.js
    """
    manager = get_manager()
    result = manager.disable_sharing_ethernet()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# INTERNET SHARING - MOBILE
# =============================================================================

@bp.route('/sharing/mobile/status', methods=['GET'])
def get_sharing_mobile_status():
    """
    Get internet sharing status via Mobile
    Replaces: getInternetSharingStatusMobile() in methods.js
    """
    manager = get_manager()
    result = manager.get_sharing_mobile_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/sharing/mobile/enable', methods=['POST'])
def enable_sharing_mobile():
    """
    Enable internet sharing via Mobile
    Replaces: enableInternetSharingMobile() in methods.js
    """
    manager = get_manager()
    result = manager.enable_sharing_mobile()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/sharing/mobile/disable', methods=['POST'])
def disable_sharing_mobile():
    """
    Disable internet sharing via Mobile
    Replaces: disableInternetSharingMobile() in methods.js
    """
    manager = get_manager()
    result = manager.disable_sharing_mobile()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# MAC FILTERING - ETHERNET
# =============================================================================

@bp.route('/mac-filter/ethernet', methods=['POST'])
def allow_mac_ethernet():
    """
    Allow specific MAC address for internet via Ethernet
    Replaces: enableInternetForMacEthernet() in methods.js
    
    Request body: { "mac": "AA:BB:CC:DD:EE:FF" }
    """
    data = request.get_json()
    if not data or 'mac' not in data:
        return jsonify({'success': False, 'error': 'Missing mac field'}), 400
    
    manager = get_manager()
    result = manager.allow_mac_ethernet(data['mac'])
    
    if result.get('success'):
        return jsonify(result)
    
    if 'Invalid MAC' in result.get('error', ''):
        return jsonify(result), 400
    return jsonify(result), 500


@bp.route('/mac-filter/ethernet', methods=['DELETE'])
def clear_mac_filters_ethernet():
    """
    Remove all MAC filters for Ethernet
    Replaces: removeAllMacFiltersForEthernet() in methods.js
    """
    manager = get_manager()
    result = manager.clear_mac_filters_ethernet()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# MAC FILTERING - MOBILE
# =============================================================================

@bp.route('/mac-filter/mobile', methods=['POST'])
def allow_mac_mobile():
    """
    Allow specific MAC address for internet via Mobile
    Replaces: allowInternetForMacMobile() in methods.js
    
    Request body: { "mac": "AA:BB:CC:DD:EE:FF" }
    """
    data = request.get_json()
    if not data or 'mac' not in data:
        return jsonify({'success': False, 'error': 'Missing mac field'}), 400
    
    manager = get_manager()
    result = manager.allow_mac_mobile(data['mac'])
    
    if result.get('success'):
        return jsonify(result)
    
    if 'Invalid MAC' in result.get('error', ''):
        return jsonify(result), 400
    return jsonify(result), 500


@bp.route('/mac-filter/mobile', methods=['DELETE'])
def clear_mac_filters_mobile():
    """
    Remove all MAC filters for Mobile
    Replaces: removeAllMacFiltersForMobile() in methods.js
    """
    manager = get_manager()
    result = manager.clear_mac_filters_mobile()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500