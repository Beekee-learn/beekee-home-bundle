"""
Base Manager class with mock support
All managers inherit from this class
"""

import subprocess
import os
from flask import current_app


class BaseManager:
    """Base class for all managers with mock support"""
    
    def __init__(self):
        self._mock_mode = None
    
    @property
    def mock_mode(self):
        """Check if running in mock mode"""
        if self._mock_mode is not None:
            return self._mock_mode
        try:
            return current_app.config.get('MOCK_MODE', True)
        except RuntimeError:
            # Outside Flask context, default to mock
            return True
    
    @mock_mode.setter
    def mock_mode(self, value):
        """Set mock mode manually (useful for testing)"""
        self._mock_mode = value
    
    def run_command(self, command, timeout=30):
        """
        Execute a shell command
        In mock mode, returns empty success
        """
        if self.mock_mode:
            return {
                'success': True,
                'output': '',
                'error': '',
                'mock': True
            }
        
        try:
            result = subprocess.run(
                command,
                shell=True,
                capture_output=True,
                text=True,
                timeout=timeout
            )
            return {
                'success': result.returncode == 0,
                'output': result.stdout.strip(),
                'error': result.stderr.strip(),
                'mock': False
            }
        except subprocess.TimeoutExpired:
            return {'success': False, 'output': '', 'error': 'Command timeout', 'mock': False}
        except Exception as e:
            return {'success': False, 'output': '', 'error': str(e), 'mock': False}
    
    def file_exists(self, path):
        """Check if file exists (returns True in mock mode)"""
        if self.mock_mode:
            return True
        return os.path.exists(path)
    
    def read_file(self, path):
        """Read file contents"""
        if self.mock_mode:
            return None
        try:
            with open(path, 'r') as f:
                return f.read()
        except Exception:
            return None
    
    def write_file(self, path, content):
        """Write content to file"""
        if self.mock_mode:
            return True
        try:
            with open(path, 'w') as f:
                f.write(content)
            return True
        except Exception:
            return False