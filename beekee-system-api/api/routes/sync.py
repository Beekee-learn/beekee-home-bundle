"""
Sync Routes - Using SyncManager
REST API endpoints for backup and sync management
Replaces sync-related methods in methods.js
"""

from flask import Blueprint, jsonify, request, current_app
from lib.sync_manager import SyncManager

bp = Blueprint('sync', __name__, url_prefix='/api/v1/sync')


def get_manager():
    """Get SyncManager instance"""
    return SyncManager()


# =============================================================================
# REMOTE SERVICE
# =============================================================================

@bp.route('/remote/status', methods=['GET'])
def get_remote_status():
    """
    Get remote sync service status
    Replaces: getRemoteStatus() in methods.js
    """
    manager = get_manager()
    result = manager.get_remote_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/remote/enable', methods=['POST'])
def activate_remote():
    """
    Activate remote sync service
    Replaces: activateRemote() in methods.js
    """
    manager = get_manager()
    result = manager.activate_remote()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/remote/disable', methods=['POST'])
def deactivate_remote():
    """
    Deactivate remote sync service
    Replaces: disactivateRemote() in methods.js
    """
    manager = get_manager()
    result = manager.deactivate_remote()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# AUTO SYNC
# =============================================================================

@bp.route('/auto/status', methods=['GET'])
def get_autosync_status():
    """
    Get auto-sync timer status
    Replaces: getAutoSyncStatus() in methods.js
    """
    manager = get_manager()
    result = manager.get_autosync_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/auto/enable', methods=['POST'])
def activate_autosync():
    """
    Activate auto-sync timer
    Replaces: activateAutoSync() in methods.js
    """
    manager = get_manager()
    result = manager.activate_autosync()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/auto/disable', methods=['POST'])
def deactivate_autosync():
    """
    Deactivate auto-sync timer
    Replaces: disactivateAutoSync() in methods.js
    """
    manager = get_manager()
    result = manager.deactivate_autosync()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# SYNC NOW
# =============================================================================

@bp.route('/start', methods=['POST'])
def sync_now():
    """
    Start synchronization immediately
    Replaces: synchronize() in methods.js (partial - only local trigger)
    """
    manager = get_manager()
    result = manager.sync_now()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


# =============================================================================
# SHARE INTERNET STATUS
# =============================================================================

@bp.route('/share-internet/ethernet/status', methods=['GET'])
def get_share_internet_ethernet():
    """
    Get share internet via ethernet setting status
    Replaces: getShareInternetViaEthernetStatus() in methods.js
    """
    manager = get_manager()
    result = manager.get_share_internet_ethernet_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500


@bp.route('/share-internet/mobile/status', methods=['GET'])
def get_share_internet_mobile():
    """
    Get share internet via mobile setting status
    Replaces: getShareInternetViaMobileStatus() in methods.js
    """
    manager = get_manager()
    result = manager.get_share_internet_mobile_status()
    
    if result.get('success'):
        return jsonify(result)
    return jsonify(result), 500
