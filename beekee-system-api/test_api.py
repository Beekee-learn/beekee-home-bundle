#!/usr/bin/env python3
"""
Test script for Beekee System API
Tests all WiFi endpoints
"""

import requests
import json
import sys

API_URL = "http://127.0.0.1:5001/api/v1"

def test_endpoint(method, endpoint, data=None, description=""):
    """Test an API endpoint"""
    url = f"{API_URL}{endpoint}"
    print(f"\n{'='*60}")
    print(f"TEST: {description}")
    print(f"{method} {endpoint}")
    if data:
        print(f"Data: {json.dumps(data, indent=2)}")
    print(f"{'='*60}")

    try:
        if method == "GET":
            response = requests.get(url, timeout=2)
        elif method == "PUT":
            response = requests.put(url, json=data, timeout=2)
        else:
            print(f"Unsupported method: {method}")
            return False

        print(f"Status: {response.status_code}")
        print(f"Response:\n{json.dumps(response.json(), indent=2)}")
        return response.status_code < 400
    except requests.exceptions.ConnectionError:
        print("ERROR: Could not connect to API. Is the server running?")
        return False
    except Exception as e:
        print(f"ERROR: {e}")
        return False

def main():
    print("""
╔══════════════════════════════════════════════════════════╗
║          Beekee System API - Test Suite                 ║
╚══════════════════════════════════════════════════════════╝
""")

    # Test health check
    if not test_endpoint("GET", "/health", description="Health Check"):
        print("\n❌ API is not running. Please start the server first:")
        print("   cd beekee-system-api && PORT=5001 venv/bin/python3 app.py")
        sys.exit(1)

    print("\n✅ API is running!")

    # Test WiFi endpoints
    test_endpoint("GET", "/wifi/settings", description="Get all WiFi settings")
    test_endpoint("GET", "/wifi/ssid", description="Get SSID")
    test_endpoint("GET", "/wifi/password", description="Get Password")
    test_endpoint("GET", "/wifi/channel", description="Get Channel")

    # Test WiFi modifications
    test_endpoint("PUT", "/wifi/ssid", {"ssid": "TestBeekee"}, description="Set SSID")
    test_endpoint("GET", "/wifi/ssid", description="Verify SSID change")

    test_endpoint("PUT", "/wifi/channel", {"channel": 11}, description="Set Channel")
    test_endpoint("GET", "/wifi/channel", description="Verify Channel change")

    # Restore original values
    test_endpoint("PUT", "/wifi/ssid", {"ssid": "BeekeeBox"}, description="Restore original SSID")
    test_endpoint("PUT", "/wifi/channel", {"channel": 6}, description="Restore original Channel")

    print(f"\n{'='*60}")
    print("✅ All tests completed!")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
