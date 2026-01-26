"""
System Routes
"""

from flask import Blueprint, jsonify, request, current_app
from lib.system_manager import SystemManager

bp = Blueprint('system', __name__, url_prefix='/api/v1/system')


def get_manager():
    return SystemManager(
        config_path=current_app.config.get('CONFIG_PATH'),
        scripts_path=current_app.config.get('SCRIPTS_PATH'),
        version_path=current_app.config.get('VERSION_PATH')
    )


@bp.route('/health', methods=['GET'])
def health():
    """Health check"""
    return jsonify({
        'status': 'ok',
        'service': 'beekee-system-api',
        'mock_mode': current_app.config.get('MOCK_MODE', False)
    })


# =============================================================================
# DISK - Replaces: getUsedSpace()
# =============================================================================

@bp.route('/disk/usage', methods=['GET'])
def get_disk_usage():
    """Get disk usage"""
    manager = get_manager()
    result = manager.get_disk_usage()
    return jsonify(result), 200 if result.get('success') else 500


# =============================================================================
# VERSIONS - Replaces: getBeekeeOsVersion(), getBeekeeHomeVersion()
# =============================================================================

@bp.route('/version/os', methods=['GET'])
def get_os_version():
    """Get Beekee OS version"""
    manager = get_manager()
    result = manager.get_os_version()
    return jsonify(result), 200 if result.get('success') else 500


@bp.route('/version/home', methods=['GET'])
def get_home_version():
    """Get Beekee Home version"""
    manager = get_manager()
    result = manager.get_home_version()
    return jsonify(result), 200 if result.get('success') else 500


# =============================================================================
# SERIAL - Replaces: getSerial()
# =============================================================================

@bp.route('/serial', methods=['GET'])
def get_serial():
    """Get device serial number"""
    manager = get_manager()
    result = manager.get_serial()
    return jsonify(result), 200 if result.get('success') else 500


# =============================================================================
# BATTERY - Replaces: getBatteryStatus()
# =============================================================================

@bp.route('/battery', methods=['GET'])
def get_battery():
    """Get battery status"""
    manager = get_manager()
    result = manager.get_battery_status()
    return jsonify(result), 200 if result.get('success') else 500


# =============================================================================
# ONLINE - Replaces: getIsOnline()
# =============================================================================

@bp.route('/online', methods=['GET'])
def get_online():
    """Check internet connectivity"""
    manager = get_manager()
    result = manager.is_online()
    return jsonify(result), 200 if result.get('success') else 500


# =============================================================================
# POWER - Replaces: reboot(), shutdown()
# =============================================================================

@bp.route('/reboot', methods=['POST'])
def reboot():
    """Reboot system"""
    manager = get_manager()
    result = manager.reboot()
    return jsonify(result), 200 if result.get('success') else 500


@bp.route('/shutdown', methods=['POST'])
def shutdown():
    """Shutdown system"""
    manager = get_manager()
    result = manager.shutdown()
    return jsonify(result), 200 if result.get('success') else 500