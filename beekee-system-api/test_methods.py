#!/usr/bin/env python3
"""
Complete Test Suite for Beekee System API
Tests ALL endpoints that replace methods.js functions
"""

import requests
import json
import sys
from typing import Optional, Dict, Any, List, Tuple

API_URL = "http://127.0.0.1:5000/api/v1"


class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    RESET = '\033[0m'
    BOLD = '\033[1m'


def print_header(title: str):
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*70}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}  {title}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*70}{Colors.RESET}")


def print_subheader(title: str):
    print(f"\n{Colors.CYAN}--- {title} ---{Colors.RESET}")


def test_endpoint(
    method: str,
    endpoint: str,
    data: Optional[Dict] = None,
    description: str = "",
    original_method: str = ""
) -> Dict[str, Any]:
    """Test an API endpoint"""
    url = f"{API_URL}{endpoint}"
    
    print(f"\n{Colors.YELLOW}▶ {description}{Colors.RESET}")
    if original_method:
        print(f"  {Colors.CYAN}Replaces: {original_method}(){Colors.RESET}")
    print(f"  {method} {endpoint}")
    
    if data:
        print(f"  Body: {json.dumps(data)}")

    try:
        headers = {'Content-Type': 'application/json'}
        
        if method == "GET":
            response = requests.get(url, timeout=10)
        elif method == "POST":
            response = requests.post(url, json=data, headers=headers, timeout=10)
        elif method == "PUT":
            response = requests.put(url, json=data, headers=headers, timeout=10)
        elif method == "DELETE":
            response = requests.delete(url, timeout=10)
        else:
            print(f"  {Colors.RED}✗ Unsupported method{Colors.RESET}")
            return {'success': False}

        success = response.status_code < 400
        
        if success:
            print(f"  {Colors.GREEN}✓ Status: {response.status_code}{Colors.RESET}")
        else:
            print(f"  {Colors.RED}✗ Status: {response.status_code}{Colors.RESET}")
        
        try:
            response_data = response.json()
            # Pretty print response (truncated)
            response_str = json.dumps(response_data, indent=2)
            if len(response_str) > 300:
                response_str = response_str[:300] + "..."
            print(f"  Response: {response_str}")
            return {'success': success, 'data': response_data, 'status': response.status_code}
        except:
            return {'success': success, 'data': response.text[:200], 'status': response.status_code}

    except requests.exceptions.ConnectionError:
        print(f"  {Colors.RED}✗ Connection failed - Is API running?{Colors.RESET}")
        return {'success': False, 'error': 'Connection failed'}
    except requests.exceptions.Timeout:
        print(f"  {Colors.RED}✗ Request timeout{Colors.RESET}")
        return {'success': False, 'error': 'Timeout'}
    except Exception as e:
        print(f"  {Colors.RED}✗ Error: {e}{Colors.RESET}")
        return {'success': False, 'error': str(e)}


def run_test_group(group_name: str, tests: List[Tuple]) -> List[Tuple[str, bool]]:
    """Run a group of tests"""
    print_header(group_name)
    results = []
    
    for test in tests:
        if len(test) == 4:
            method, endpoint, data, desc = test
            original = ""
        else:
            method, endpoint, data, desc, original = test
        
        result = test_endpoint(method, endpoint, data, desc, original)
        results.append((desc, result['success']))
    
    return results


def main():
    print(f"""{Colors.BOLD}
╔══════════════════════════════════════════════════════════════════════╗
║           BEEKEE SYSTEM API - COMPLETE TEST SUITE                    ║
║         Testing all endpoints replacing methods.js                   ║
╚══════════════════════════════════════════════════════════════════════╝
{Colors.RESET}
""")

    # Check API availability
    print(f"{Colors.YELLOW}Checking API availability...{Colors.RESET}")
    result = test_endpoint("GET", "/health", description="API Health Check")
    
    if not result['success']:
        print(f"\n{Colors.RED}{'='*70}")
        print("  ❌ API is not running!")
        print("  Please start the server first:")
        print("    cd beekee-system-api")
        print("    source venv/bin/activate")
        print("    python app.py")
        print(f"{'='*70}{Colors.RESET}")
        sys.exit(1)
    
    print(f"\n{Colors.GREEN}✅ API is running!{Colors.RESET}")
    
    all_results = []
    
    # ==========================================================================
    # SYSTEM TESTS
    # ==========================================================================
    system_tests = [
        ("GET", "/system/health", None, "Health Check", ""),
        ("GET", "/system/disk/usage", None, "Get Disk Usage", "getUsedSpace"),
        ("GET", "/system/version/os", None, "Get Beekee OS Version", "getBeekeeOsVersion"),
        ("GET", "/system/version/home", None, "Get Beekee Home Version", "getBeekeeHomeVersion"),
        ("GET", "/system/serial", None, "Get Device Serial", "getSerial"),
        ("GET", "/system/battery", None, "Get Battery Status", "getBatteryStatus"),
        ("GET", "/system/online", None, "Check Internet Connectivity", "getIsOnline"),
        # Don't test reboot/shutdown in dev!
        # ("POST", "/system/reboot", None, "Reboot System", "reboot"),
    ]
    all_results.extend(run_test_group("SYSTEM ENDPOINTS", system_tests))
    
    # ==========================================================================
    # WIFI TESTS
    # ==========================================================================
    wifi_tests = [
        ("GET", "/wifi/settings", None, "Get All WiFi Settings", ""),
        ("GET", "/wifi/ssid", None, "Get SSID", "getSSID"),
        ("GET", "/wifi/password", None, "Get WiFi Password", "getWifiPassword"),
        ("GET", "/wifi/channel", None, "Get WiFi Channel", "getWifiChannel"),
        # Modification tests (commented to avoid changes)
        # ("PUT", "/wifi/ssid", {"ssid": "TestBeekee"}, "Set SSID", "setSSID"),
        # ("PUT", "/wifi/channel", {"channel": 11}, "Set Channel", "setWifiChannel"),
    ]
    all_results.extend(run_test_group("WIFI ENDPOINTS", wifi_tests))
    
    # ==========================================================================
    # NETWORK TESTS
    # ==========================================================================
    network_tests = [
        ("GET", "/network/interfaces", None, "Get All Interfaces", ""),
        ("GET", "/network/ip/eth0", None, "Get eth0 IP", "getEth0IP"),
        ("GET", "/network/ip/wlan0", None, "Get wlan0 IP", ""),
        ("GET", "/network/ip/wwan0", None, "Get wwan0 IP", "getWwan0IP"),
        ("GET", "/network/internet/interface", None, "Get Internet Interface", "getInternetInterface"),
        ("GET", "/network/sharing/ethernet/status", None, "Get Ethernet Sharing Status", "getInternetSharingStatusEthernet"),
        ("GET", "/network/sharing/mobile/status", None, "Get Mobile Sharing Status", "getInternetSharingStatusMobile"),
    ]
    all_results.extend(run_test_group("NETWORK ENDPOINTS", network_tests))
    
    # ==========================================================================
    # MOBILE TESTS
    # ==========================================================================
    mobile_tests = [
        ("GET", "/mobile/status", None, "Get Modem Status", ""),
        ("GET", "/mobile/operator", None, "Get Operator Name", "getOperatorName"),
        ("GET", "/mobile/signal", None, "Get Signal Strength", "getSignalStrength"),
        ("GET", "/mobile/sim/status", None, "Get SIM Card Status", "getSimCardStatus"),
        ("GET", "/mobile/sim/pin", None, "Get SIM PIN Status", "getSimPin"),
        ("GET", "/mobile/apn", None, "Get APN", "getAPN"),
        ("GET", "/mobile/apn/user", None, "Get APN User", "getAPNUser"),
        ("GET", "/mobile/apn/password", None, "Get APN Password", "getAPNPassword"),
    ]
    all_results.extend(run_test_group("MOBILE/MODEM ENDPOINTS", mobile_tests))
    
    # ==========================================================================
    # SYNC TESTS
    # ==========================================================================
    sync_tests = [
        ("GET", "/sync/remote/status", None, "Get Remote Sync Status", "getRemoteStatus"),
        ("GET", "/sync/auto/status", None, "Get Auto-Sync Status", "getAutoSyncStatus"),
        ("GET", "/sync/share-internet/ethernet/status", None, "Get Share Internet Ethernet", "getShareInternetViaEthernetStatus"),
        ("GET", "/sync/share-internet/mobile/status", None, "Get Share Internet Mobile", "getShareInternetViaMobileStatus"),
    ]
    all_results.extend(run_test_group("SYNC ENDPOINTS", sync_tests))
    
    # ==========================================================================
    # SUMMARY
    # ==========================================================================
    print_header("TEST SUMMARY")
    
    total = len(all_results)
    passed = sum(1 for _, success in all_results if success)
    failed = total - passed
    
    print(f"\n  📊 Total tests: {total}")
    print(f"  {Colors.GREEN}✓ Passed: {passed}{Colors.RESET}")
    print(f"  {Colors.RED}✗ Failed: {failed}{Colors.RESET}")
    
    if failed > 0:
        print(f"\n  {Colors.RED}Failed tests:{Colors.RESET}")
        for desc, success in all_results:
            if not success:
                print(f"    • {desc}")
    
    # Mapping table
    print_header("METHODS.JS → API MAPPING")
    mapping = [
        ("getUsedSpace()", "GET /api/v1/system/disk/usage"),
        ("getSSID()", "GET /api/v1/wifi/ssid"),
        ("setSSID()", "PUT /api/v1/wifi/ssid"),
        ("getWifiPassword()", "GET /api/v1/wifi/password"),
        ("setWifiPassword()", "PUT /api/v1/wifi/password"),
        ("getWifiChannel()", "GET /api/v1/wifi/channel"),
        ("setWifiChannel()", "PUT /api/v1/wifi/channel"),
        ("getSerial()", "GET /api/v1/system/serial"),
        ("getOperatorName()", "GET /api/v1/mobile/operator"),
        ("getSignalStrength()", "GET /api/v1/mobile/signal"),
        ("getAPN()", "GET /api/v1/mobile/apn"),
        ("setAPN()", "PUT /api/v1/mobile/apn"),
        ("getSimCardStatus()", "GET /api/v1/mobile/sim/status"),
        ("getBatteryStatus()", "GET /api/v1/system/battery"),
        ("getIsOnline()", "GET /api/v1/system/online"),
        ("getEth0IP()", "GET /api/v1/network/ip/eth0"),
        ("getWwan0IP()", "GET /api/v1/network/ip/wwan0"),
        ("getBeekeeOsVersion()", "GET /api/v1/system/version/os"),
        ("getBeekeeHomeVersion()", "GET /api/v1/system/version/home"),
        ("reboot()", "POST /api/v1/system/reboot"),
        ("shutdown()", "POST /api/v1/system/shutdown"),
        ("synchronize()", "POST /api/v1/sync/now"),
    ]
    
    print(f"\n  {'methods.js':<30} {'API Endpoint':<40}")
    print(f"  {'-'*30} {'-'*40}")
    for old, new in mapping:
        print(f"  {old:<30} {new:<40}")
    
    print(f"\n{'='*70}\n")
    
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())