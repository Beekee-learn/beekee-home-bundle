"""
Configuration for Beekee System API
"""

import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()


class Config:
    """Base configuration"""
    
    # Flask
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')
    DEBUG = False
    TESTING = False
    
    # API
    PORT = int(os.environ.get('PORT', 5000))
    HOST = os.environ.get('HOST', '0.0.0.0')
    
    # Mock mode - True on Mac/dev, False on Raspberry Pi
    MOCK_MODE = os.environ.get('MOCK_MODE', 'true').lower() == 'true'
    
    # File paths
    WIFI_SETTINGS_PATH = os.environ.get('WIFI_SETTINGS_PATH', '/home/beekee/.wifisettings')
    CONFIG_PATH = os.environ.get('CONFIG_PATH', '/boot/beekee/beekee.conf')
    SCRIPTS_PATH = os.environ.get('SCRIPTS_PATH', '/home/beekee/scripts')
    VERSION_PATH = os.environ.get('VERSION_PATH', '/home/beekee/beekee-home/private/version.json')
    
    # CORS
    CORS_ORIGINS = os.environ.get('CORS_ORIGINS', 'http://localhost:3000').split(',')
    
    # Logging
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'INFO')
    LOG_FILE = os.environ.get('LOG_FILE', 'logs/beekee-api.log')


class DevelopmentConfig(Config):
    """Development configuration - Mac with mock data"""
    DEBUG = True
    MOCK_MODE = True
    
    # Override paths for development
    WIFI_SETTINGS_PATH = os.environ.get('WIFI_SETTINGS_PATH', 'test_wifi_config.conf')
    CONFIG_PATH = os.environ.get('CONFIG_PATH', 'test_config.txt')
    SCRIPTS_PATH = os.environ.get('SCRIPTS_PATH', './scripts')
    VERSION_PATH = os.environ.get('VERSION_PATH', './private/version.json')


class ProductionConfig(Config):
    """Production configuration - Raspberry Pi"""
    DEBUG = False
    MOCK_MODE = False


class TestingConfig(Config):
    """Testing configuration"""
    TESTING = True
    MOCK_MODE = True


def get_config():
    """Get configuration based on FLASK_ENV"""
    env = os.environ.get('FLASK_ENV', 'development')
    
    configs = {
        'development': DevelopmentConfig,
        'production': ProductionConfig,
        'testing': TestingConfig
    }
    
    return configs.get(env, DevelopmentConfig)
