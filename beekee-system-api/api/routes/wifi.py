"""
WiFi Routes - Using WifiManager
REST API endpoints for WiFi configuration management
Replaces all WiFi-related cmd() calls in methods.js
"""

import os
from flask import Blueprint, jsonify, request, current_app
from lib.wifi_manager import WifiManager

bp = Blueprint('wifi', __name__, url_prefix='/api/v1/wifi')


def get_manager():
    """Get WifiManager instance"""
    return WifiManager(
        settings_path=current_app.config.get('WIFI_SETTINGS_PATH')
    )


# =============================================================================
# SSID
# =============================================================================

@bp.route('/ssid', methods=['GET'])
def get_ssid():
    """
    Get current WiFi SSID
    Replaces: getSSID() in methods.js
    """
    manager = get_manager()
    result = manager.get_ssid()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/ssid', methods=['PUT'])
def set_ssid():
    """
    Set WiFi SSID
    Replaces: setSSID() in methods.js
    
    Request body: { "ssid": "NewNetworkName" }
    """
    data = request.get_json()
    if not data or 'ssid' not in data:
        return jsonify({'success': False, 'error': 'Missing ssid field'}), 400
    
    ssid = data['ssid'].strip()
    
    # Validate SSID
    if not ssid:
        return jsonify({'success': False, 'error': 'SSID cannot be empty'}), 400
    if len(ssid) > 32:
        return jsonify({'success': False, 'error': 'SSID cannot exceed 32 characters'}), 400
    
    manager = get_manager()
    result = manager.set_ssid(ssid)
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# PASSWORD
# =============================================================================

@bp.route('/password', methods=['GET'])
def get_password():
    """
    Get current WiFi password
    Replaces: getWifiPassword() in methods.js
    """
    manager = get_manager()
    result = manager.get_password()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/password', methods=['PUT'])
def set_password():
    """
    Set WiFi password
    Replaces: setWifiPassword() in methods.js
    
    Request body: { "password": "NewSecurePassword" }
    """
    data = request.get_json()
    if not data or 'password' not in data:
        return jsonify({'success': False, 'error': 'Missing password field'}), 400
    
    password = data['password']
    
    # Validate password (WPA2 requires 8-63 characters)
    if len(password) < 8:
        return jsonify({'success': False, 'error': 'Password must be at least 8 characters'}), 400
    if len(password) > 63:
        return jsonify({'success': False, 'error': 'Password cannot exceed 63 characters'}), 400
    
    manager = get_manager()
    result = manager.set_password(password)
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# CHANNEL
# =============================================================================

@bp.route('/channel', methods=['GET'])
def get_channel():
    """
    Get current WiFi channel
    Replaces: getWifiChannel() in methods.js
    """
    manager = get_manager()
    result = manager.get_channel()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/channel', methods=['PUT'])
def set_channel():
    """
    Set WiFi channel
    Replaces: setWifiChannel() in methods.js
    
    Request body: { "channel": 6 }
    Valid channels: 1-13 (2.4GHz)
    """
    data = request.get_json()
    if not data or 'channel' not in data:
        return jsonify({'success': False, 'error': 'Missing channel field'}), 400
    
    try:
        channel = int(data['channel'])
    except (ValueError, TypeError):
        return jsonify({'success': False, 'error': 'Channel must be a number'}), 400
    
    # Validate channel (2.4GHz only)
    if channel < 1 or channel > 13:
        return jsonify({'success': False, 'error': 'Channel must be between 1 and 13'}), 400
    
    manager = get_manager()
    result = manager.set_channel(channel)
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# COMPLETE SETTINGS
# =============================================================================

@bp.route('/settings', methods=['GET'])
def get_settings():
    """
    Get all WiFi settings at once
    """
    manager = get_manager()
    
    ssid = manager.get_ssid()
    password = manager.get_password()
    channel = manager.get_channel()
    
    return jsonify({
        'success': True,
        'mock': ssid.get('mock', False),
        'ssid': ssid.get('ssid'),
        'password': password.get('password'),
        'channel': channel.get('channel')
    })


@bp.route('/settings', methods=['PUT'])
def set_settings():
    """
    Set multiple WiFi settings at once
    
    Request body: { "ssid": "Name", "password": "Pass", "channel": 6 }
    All fields are optional
    """
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'error': 'No data provided'}), 400
    
    manager = get_manager()
    results = []
    errors = []
    
    if 'ssid' in data:
        result = manager.set_ssid(data['ssid'])
        if result.get('success'):
            results.append('SSID updated')
        else:
            errors.append(f"SSID: {result.get('error')}")
    
    if 'password' in data:
        result = manager.set_password(data['password'])
        if result.get('success'):
            results.append('Password updated')
        else:
            errors.append(f"Password: {result.get('error')}")
    
    if 'channel' in data:
        result = manager.set_channel(data['channel'])
        if result.get('success'):
            results.append('Channel updated')
        else:
            errors.append(f"Channel: {result.get('error')}")
    
    if errors:
        return jsonify({
            'success': False,
            'mock': manager.mock_mode,
            'updated': results,
            'errors': errors
        }), 400
    
    return jsonify({
        'success': True,
        'mock': manager.mock_mode,
        'updated': results,
        'message': 'WiFi settings updated successfully'
    })


# =============================================================================
# RESTART HOSTAPD
# =============================================================================

@bp.route('/restart', methods=['POST'])
def restart_hostapd():
    """
    Restart hostapd service to apply changes
    """
    manager = get_manager()
    result = manager.restart_hostapd()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500
