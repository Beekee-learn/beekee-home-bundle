"""
Beekee System API
Flask REST API for managing Beekee system operations
"""

import os
import logging
from flask import Flask, jsonify
from flask_cors import CORS
from config import get_config


def setup_logging(app):
    """Configure logging"""
    log_level = getattr(logging, app.config.get('LOG_LEVEL', 'INFO'))
    log_file = app.config.get('LOG_FILE', 'logs/beekee-api.log')
    
    # Create logs directory if needed
    log_dir = os.path.dirname(log_file)
    if log_dir and not os.path.exists(log_dir):
        os.makedirs(log_dir)
    
    # Configure logging
    logging.basicConfig(
        level=log_level,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_file) if log_file else logging.NullHandler(),
            logging.StreamHandler()
        ]
    )
    
    return logging.getLogger(__name__)


def create_app(config_class=None):
    """Application factory"""
    app = Flask(__name__)
    
    # Load configuration
    if config_class is None:
        config_class = get_config()
    app.config.from_object(config_class)
    
    # Setup logging
    logger = setup_logging(app)
    logger.info(f"Starting Beekee System API in {'MOCK' if app.config.get('MOCK_MODE') else 'PRODUCTION'} mode")
    
    # Enable CORS
    CORS(app, resources={
        r"/api/*": {
            "origins": app.config.get('CORS_ORIGINS', ['*']),
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })
    
    # Register blueprints
    from api.routes import system, network, wifi, mobile, sync
    
    app.register_blueprint(system.bp)
    app.register_blueprint(network.bp)
    app.register_blueprint(wifi.bp)
    app.register_blueprint(mobile.bp)
    app.register_blueprint(sync.bp)
    
    # Root endpoint
    @app.route('/')
    def index():
        return jsonify({
            'name': 'Beekee System API',
            'version': '1.0.0',
            'mock_mode': app.config.get('MOCK_MODE', False),
            'endpoints': {
                'system': '/api/v1/system',
                'network': '/api/v1/network',
                'wifi': '/api/v1/wifi',
                'mobile': '/api/v1/mobile',
                'sync': '/api/v1/sync'
            }
        })
    
    # Global health check (outside /system for convenience)
    @app.route('/api/v1/health')
    @app.route('/health')
    def health():
        return jsonify({
            'status': 'ok',
            'service': 'beekee-system-api',
            'mock_mode': app.config.get('MOCK_MODE', False)
        })
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({'success': False, 'error': 'Endpoint not found'}), 404
    
    @app.errorhandler(500)
    def server_error(e):
        logger.error(f"Internal error: {e}")
        return jsonify({'success': False, 'error': 'Internal server error'}), 500
    
    return app


# Main entry point
app = create_app()

if __name__ == '__main__':
    port = app.config.get('PORT', 5000)
    host = app.config.get('HOST', '0.0.0.0')
    debug = app.config.get('DEBUG', False)
    mock = app.config.get('MOCK_MODE', True)
    
    print(f"""
╔══════════════════════════════════════════════════════════╗
║              Beekee System API v1.0.0                   ║
╠══════════════════════════════════════════════════════════╣
║  Mode: {'MOCK (Development)'.ljust(45)}║
║  URL:  http://{host}:{port}                              ║
╚══════════════════════════════════════════════════════════╝
""" if mock else f"""
╔══════════════════════════════════════════════════════════╗
║              Beekee System API v1.0.0                   ║
╠══════════════════════════════════════════════════════════╣
║  Mode: PRODUCTION (Real commands)                       ║
║  URL:  http://{host}:{port}                              ║
╚══════════════════════════════════════════════════════════╝
""")
    
    app.run(host=host, port=port, debug=debug)
