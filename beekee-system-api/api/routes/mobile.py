"""
Mobile/Modem Routes - Using MobileManager
REST API endpoints for mobile connectivity management
Replaces all mobile-related cmd() calls in methods.js
"""

from flask import Blueprint, jsonify, request, current_app
from lib.mobile_manager import MobileManager

bp = Blueprint('mobile', __name__, url_prefix='/api/v1/mobile')


def get_manager():
    """Get MobileManager instance"""
    return MobileManager(
        scripts_path=current_app.config.get('SCRIPTS_PATH')
    )


# =============================================================================
# MODEM STATUS
# =============================================================================

@bp.route('/status', methods=['GET'])
def get_modem_status():
    """
    Get complete modem status
    Returns availability, operator, and connection state
    """
    manager = get_manager()
    result = manager.get_modem_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# OPERATOR
# =============================================================================

@bp.route('/operator', methods=['GET'])
def get_operator_name():
    """
    Get mobile operator name
    Replaces: getOperatorName() in methods.js
    """
    manager = get_manager()
    result = manager.get_operator_name()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# SIGNAL STRENGTH
# =============================================================================

@bp.route('/signal', methods=['GET'])
def get_signal_strength():
    """
    Get mobile signal strength
    Replaces: getSignalStrength() in methods.js
    
    Returns:
        - rssi: Signal strength in dBm (e.g., -75)
        - percentage: Signal as percentage (0-100)
        - quality: Human-readable quality (Excellent/Good/Fair/Poor/Unknown)
    """
    manager = get_manager()
    result = manager.get_signal_strength()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# SIM CARD
# =============================================================================

@bp.route('/sim/status', methods=['GET'])
def get_sim_status():
    """
    Get SIM card status
    Replaces: getSimCardStatus() in methods.js
    """
    manager = get_manager()
    result = manager.get_sim_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/sim/pin', methods=['GET'])
def get_sim_pin_status():
    """
    Get SIM PIN status
    Replaces: getSimPin() in methods.js
    """
    manager = get_manager()
    result = manager.get_sim_pin_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/sim/pin', methods=['PUT'])
def set_sim_pin():
    """
    Set SIM PIN
    Replaces: setSimPin() in methods.js
    
    Request body: { "pin": "1234" }
    """
    data = request.get_json()
    if not data or 'pin' not in data:
        return jsonify({'success': False, 'error': 'Missing pin field'}), 400
    
    manager = get_manager()
    result = manager.set_sim_pin(data['pin'])
    
    if result.get('success'):
        return jsonify(result)
    
    if 'must be' in result.get('error', ''):
        return jsonify(result), 400
    return jsonify(result), 500


# =============================================================================
# APN SETTINGS
# =============================================================================

@bp.route('/apn', methods=['GET'])
def get_apn():
    """
    Get APN
    Replaces: getAPN() in methods.js
    """
    manager = get_manager()
    result = manager.get_apn()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/apn', methods=['PUT'])
def set_apn():
    """
    Set APN settings
    Replaces: setAPN() in methods.js
    
    Request body: { "apn": "internet", "user": "optional", "password": "optional" }
    """
    data = request.get_json()
    if not data or 'apn' not in data:
        return jsonify({'success': False, 'error': 'Missing apn field'}), 400
    
    manager = get_manager()
    result = manager.set_apn(
        apn=data['apn'],
        user=data.get('user'),
        password=data.get('password')
    )
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/apn/user', methods=['GET'])
def get_apn_user():
    """
    Get APN username
    Replaces: getAPNUser() in methods.js
    """
    manager = get_manager()
    result = manager.get_apn_user()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/apn/user', methods=['PUT'])
def set_apn_user():
    """
    Set APN username
    Replaces: setAPNUser() in methods.js
    
    Request body: { "user": "username" }
    """
    data = request.get_json()
    if not data or 'user' not in data:
        return jsonify({'success': False, 'error': 'Missing user field'}), 400
    
    manager = get_manager()
    result = manager.set_apn(
        apn=None,  # Don't change APN
        user=data['user']
    )
    
    # Override message
    if result.get('success'):
        result['message'] = 'APN user updated'
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/apn/password', methods=['GET'])
def get_apn_password():
    """
    Get APN password
    Replaces: getAPNPassword() in methods.js
    """
    manager = get_manager()
    result = manager.get_apn_password()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/apn/password', methods=['PUT'])
def set_apn_password():
    """
    Set APN password
    Replaces: setAPNPassword() in methods.js
    
    Request body: { "password": "secret" }
    """
    data = request.get_json()
    if not data or 'password' not in data:
        return jsonify({'success': False, 'error': 'Missing password field'}), 400
    
    manager = get_manager()
    result = manager.set_apn(
        apn=None,  # Don't change APN
        password=data['password']
    )
    
    # Override message
    if result.get('success'):
        result['message'] = 'APN password updated'
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# CONNECTION MANAGEMENT
# =============================================================================

@bp.route('/restart', methods=['POST'])
def restart_connection():
    """
    Restart mobile connection
    Replaces: restartMobileConnect() in methods.js
    """
    manager = get_manager()
    result = manager.restart_connection()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/connect', methods=['POST'])
def connect():
    """
    Connect to mobile network
    Alias for restart for clarity
    """
    manager = get_manager()
    result = manager.restart_connection()
    
    if result.get('success'):
        result['message'] = 'Connecting to mobile network...'
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/disconnect', methods=['POST'])
def disconnect():
    """
    Disconnect from mobile network
    """
    manager = get_manager()
    
    if manager.mock_mode:
        return jsonify({
            'success': True,
            'mock': True,
            'message': 'Mock - would disconnect from mobile network'
        })
    
    result = manager.run_command("sudo nmcli connection down 'Mobile' 2>/dev/null || true")
    return jsonify({
        'success': True,
        'mock': False,
        'message': 'Disconnected from mobile network'
    })