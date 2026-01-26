# Beekee System API

Python Flask REST API for managing Beekee system operations including WiFi configuration, network settings, cellular connectivity, and hardware monitoring.

## Features

- **WiFi Management**: SSID, password, and channel configuration
- **RESTful API**: Clean, versioned API endpoints
- **CORS Support**: Configured for Meteor app integration
- **Error Handling**: Comprehensive error handling and logging
- **Modular Design**: Separated business logic (managers) from routes

## Project Structure

```
beekee-system-api/
├── app.py                      # Flask application entry point
├── config.py                   # Configuration settings
├── requirements.txt            # Python dependencies
├── .env.example               # Environment variables template
├── api/
│   ├── __init__.py
│   └── routes/
│       ├── __init__.py
│       └── wifi.py            # WiFi endpoints
├── lib/
│   └── wifi_manager.py        # WiFi business logic
├── scripts/                   # System scripts
└── logs/                      # Application logs (auto-created)
```

## Installation

### 1. Create Virtual Environment

```bash
cd beekee-system-api
python3 -m venv venv
source venv/bin/activate  # On Linux/Mac
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
nano .env
```

### 4. Set File Permissions (Production)

Ensure the API has read/write access to configuration files:

```bash
sudo chown www-data:www-data /etc/hostapd/hostapd.conf
sudo chmod 644 /etc/hostapd/hostapd.conf
```

## Running the API

### Development Mode

```bash
python3 app.py
```

The API will run on `http://127.0.0.1:5000`

### Production Mode (systemd service)

See "Systemd Service" section below.

## API Endpoints

### Health Check

**GET** `/api/v1/health`

Response:
```json
{
  "status": "healthy",
  "service": "beekee-system-api",
  "version": "1.0.0"
}
```

### WiFi Endpoints

#### Get SSID
**GET** `/api/v1/wifi/ssid`

Response:
```json
{
  "ssid": "BeekeeBox"
}
```

#### Set SSID
**PUT** `/api/v1/wifi/ssid`

Request:
```json
{
  "ssid": "NewBeekeeBox"
}
```

Response:
```json
{
  "success": true,
  "message": "SSID updated successfully",
  "ssid": "NewBeekeeBox"
}
```

#### Get Password
**GET** `/api/v1/wifi/password`

Response:
```json
{
  "password": "beekeepass"
}
```

#### Set Password
**PUT** `/api/v1/wifi/password`

Request:
```json
{
  "password": "newpassword"
}
```

Response:
```json
{
  "success": true,
  "message": "Password updated successfully"
}
```

#### Get Channel
**GET** `/api/v1/wifi/channel`

Response:
```json
{
  "channel": 6
}
```

#### Set Channel
**PUT** `/api/v1/wifi/channel`

Request:
```json
{
  "channel": 11
}
```

Response:
```json
{
  "success": true,
  "message": "Channel updated successfully",
  "channel": 11
}
```

#### Get All Settings
**GET** `/api/v1/wifi/settings`

Response:
```json
{
  "ssid": "BeekeeBox",
  "password": "beekeepass",
  "channel": 6
}
```

## Testing the API

### Using curl

```bash
# Health check
curl http://127.0.0.1:5000/api/v1/health

# Get SSID
curl http://127.0.0.1:5000/api/v1/wifi/ssid

# Set SSID
curl -X PUT http://127.0.0.1:5000/api/v1/wifi/ssid \
  -H "Content-Type: application/json" \
  -d '{"ssid":"MyNewSSID"}'

# Get all WiFi settings
curl http://127.0.0.1:5000/api/v1/wifi/settings
```

### Using Python

```python
import requests

# Get SSID
response = requests.get('http://127.0.0.1:5000/api/v1/wifi/ssid')
print(response.json())

# Set SSID
response = requests.put(
    'http://127.0.0.1:5000/api/v1/wifi/ssid',
    json={'ssid': 'NewBeekeeBox'}
)
print(response.json())
```

## Systemd Service

Create `/etc/systemd/system/beekee-system-api.service`:

```ini
[Unit]
Description=Beekee System API
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/path/to/beekee-system-api
Environment="PATH=/path/to/beekee-system-api/venv/bin"
EnvironmentFile=/path/to/beekee-system-api/.env
ExecStart=/path/to/beekee-system-api/venv/bin/python3 /path/to/beekee-system-api/app.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable beekee-system-api
sudo systemctl start beekee-system-api
sudo systemctl status beekee-system-api
```

## Integration with Meteor

Update your Meteor methods to call the Flask API:

```javascript
// server/methods.js
import { HTTP } from 'meteor/http';

const API_URL = 'http://127.0.0.1:5000/api/v1';

Meteor.methods({
  'getSSID': function() {
    try {
      const result = HTTP.get(`${API_URL}/wifi/ssid`);
      return result.data.ssid;
    } catch (error) {
      throw new Meteor.Error('api-error', error.message);
    }
  },
  
  'setSSID': function(newSSID) {
    try {
      const result = HTTP.put(`${API_URL}/wifi/ssid`, {
        data: { ssid: newSSID }
      });
      return result.data.success;
    } catch (error) {
      throw new Meteor.Error('api-error', error.message);
    }
  }
});
```

## Security Considerations

1. **Localhost Binding**: API runs on `127.0.0.1` by default (not accessible from network)
2. **CORS**: Configured to only allow requests from Meteor app
3. **File Permissions**: Ensure proper permissions on configuration files
4. **Authentication**: Consider adding authentication tokens for production
5. **Rate Limiting**: Consider adding rate limiting for production use

## Logging

Logs are stored in `logs/beekee-api.log` with automatic rotation (10MB per file, 10 backup files).

View logs:
```bash
tail -f logs/beekee-api.log
```

## Future Enhancements

- Network management endpoints
- Cellular/mobile connectivity endpoints
- System operations (reboot, shutdown)
- Hardware monitoring endpoints
- Authentication/authorization
- Rate limiting
- WebSocket support for real-time updates

## License

Same as Beekee Home project

## Support

For issues and questions, please refer to the main Beekee project repository.
