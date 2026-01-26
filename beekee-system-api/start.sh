#!/bin/bash
# Start Beekee System API for development/testing

cd "$(dirname "$0")"

echo "Starting Beekee System API on port 5001..."
export PORT=5001
source venv/bin/activate
python3 app.py
