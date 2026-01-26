#!/bin/bash
#
# Installation script for Beekee System API
# This script sets up the Flask API as a systemd service
#

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Beekee System API Installation ===${NC}\n"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Please run as root (use sudo)${NC}"
    exit 1
fi

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
API_DIR="$SCRIPT_DIR"

echo -e "${YELLOW}Installing to: $API_DIR${NC}\n"

# Install system dependencies
echo -e "${GREEN}Installing system dependencies...${NC}"
apt-get update
apt-get install -y python3 python3-pip python3-venv

# Create virtual environment
echo -e "${GREEN}Creating Python virtual environment...${NC}"
cd "$API_DIR"
python3 -m venv venv

# Activate virtual environment and install dependencies
echo -e "${GREEN}Installing Python dependencies...${NC}"
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
deactivate

# Create .env file if it doesn't exist
if [ ! -f "$API_DIR/.env" ]; then
    echo -e "${GREEN}Creating .env file...${NC}"
    cp "$API_DIR/.env.example" "$API_DIR/.env"
    echo -e "${YELLOW}Please edit $API_DIR/.env with your configuration${NC}"
fi

# Create logs directory
echo -e "${GREEN}Creating logs directory...${NC}"
mkdir -p "$API_DIR/logs"

# Set permissions
echo -e "${GREEN}Setting permissions...${NC}"
chown -R www-data:www-data "$API_DIR"
chmod +x "$API_DIR/app.py"

# Install systemd service
echo -e "${GREEN}Installing systemd service...${NC}"
sed "s|/home/pi/beekee-system-api|$API_DIR|g" "$API_DIR/beekee-system-api.service" > /etc/systemd/system/beekee-system-api.service

# Reload systemd
systemctl daemon-reload

# Enable and start service
echo -e "${GREEN}Enabling and starting service...${NC}"
systemctl enable beekee-system-api
systemctl start beekee-system-api

# Check status
sleep 2
if systemctl is-active --quiet beekee-system-api; then
    echo -e "\n${GREEN}✓ Beekee System API installed and running successfully!${NC}"
    echo -e "${GREEN}✓ Service: beekee-system-api${NC}"
    echo -e "${GREEN}✓ API URL: http://127.0.0.1:5000${NC}\n"
    echo -e "Check status: ${YELLOW}sudo systemctl status beekee-system-api${NC}"
    echo -e "View logs: ${YELLOW}sudo journalctl -u beekee-system-api -f${NC}"
    echo -e "Test API: ${YELLOW}curl http://127.0.0.1:5000/api/v1/health${NC}\n"
else
    echo -e "\n${RED}✗ Service failed to start. Check logs:${NC}"
    echo -e "${YELLOW}sudo journalctl -u beekee-system-api -n 50${NC}\n"
    exit 1
fi
