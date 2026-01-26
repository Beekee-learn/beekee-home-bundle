"""
Sync Manager
Handles synchronization and remote services
"""

from lib.base_manager import BaseManager
from lib.mock_data import get_mock


class SyncManager(BaseManager):
    """Manager for sync operations"""
    
    # =========================================================================
    # REMOTE SERVICE
    # =========================================================================
    
    def get_remote_status(self):
        """Get remote sync service status"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'active': get_mock('services', 'remote', 'active')
            }
        
        try:
            result = self.run_command(
                "systemctl is-active beekee-remote-sync.service 2>/dev/null || echo 'inactive'"
            )
            return {
                'success': True,
                'mock': False,
                'active': result['output'] == 'active'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def activate_remote(self):
        """Activate remote sync service"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would activate remote sync'
            }
        
        try:
            result = self.run_command(
                "sudo systemctl enable beekee-remote-sync.service && "
                "sudo systemctl start beekee-remote-sync.service"
            )
            return {
                'success': result['success'],
                'mock': False,
                'message': 'Remote sync activated' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def deactivate_remote(self):
        """Deactivate remote sync service"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would deactivate remote sync'
            }
        
        try:
            result = self.run_command(
                "sudo systemctl stop beekee-remote-sync.service && "
                "sudo systemctl disable beekee-remote-sync.service"
            )
            return {
                'success': result['success'],
                'mock': False,
                'message': 'Remote sync deactivated' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # AUTO SYNC
    # =========================================================================
    
    def get_autosync_status(self):
        """Get auto-sync timer status"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'enabled': get_mock('services', 'autosync', 'enabled')
            }
        
        try:
            result = self.run_command(
                "systemctl is-active beekee-autosync.timer 2>/dev/null || echo 'inactive'"
            )
            return {
                'success': True,
                'mock': False,
                'enabled': result['output'] == 'active'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def activate_autosync(self):
        """Activate auto-sync timer"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would activate auto-sync'
            }
        
        try:
            result = self.run_command(
                "sudo systemctl enable beekee-autosync.timer && "
                "sudo systemctl start beekee-autosync.timer"
            )
            return {
                'success': result['success'],
                'mock': False,
                'message': 'Auto-sync activated' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def deactivate_autosync(self):
        """Deactivate auto-sync timer"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would deactivate auto-sync'
            }
        
        try:
            result = self.run_command(
                "sudo systemctl stop beekee-autosync.timer && "
                "sudo systemctl disable beekee-autosync.timer"
            )
            return {
                'success': result['success'],
                'mock': False,
                'message': 'Auto-sync deactivated' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # SYNC NOW
    # =========================================================================
    
    def sync_now(self):
        """Trigger immediate synchronization"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'message': 'Mock - would start synchronization'
            }
        
        try:
            result = self.run_command("sudo systemctl start beekee-sync.service", timeout=120)
            return {
                'success': result['success'],
                'mock': False,
                'message': 'Synchronization started' if result['success'] else result['error']
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    # =========================================================================
    # SHARE INTERNET STATUS
    # =========================================================================
    
    def get_share_internet_ethernet_status(self):
        """Get share internet via ethernet status"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'enabled': get_mock('sync', 'share_internet_ethernet')
            }
        
        try:
            result = self.run_command("cat /etc/beekee/share-internet-ethernet 2>/dev/null || echo 'false'")
            return {
                'success': True,
                'mock': False,
                'enabled': result['output'].strip().lower() == 'true'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def get_share_internet_mobile_status(self):
        """Get share internet via mobile status"""
        if self.mock_mode:
            return {
                'success': True,
                'mock': True,
                'enabled': get_mock('sync', 'share_internet_mobile')
            }
        
        try:
            result = self.run_command("cat /etc/beekee/share-internet-mobile 2>/dev/null || echo 'false'")
            return {
                'success': True,
                'mock': False,
                'enabled': result['output'].strip().lower() == 'true'
            }
        except Exception as e:
            return {'success': False, 'error': str(e)}