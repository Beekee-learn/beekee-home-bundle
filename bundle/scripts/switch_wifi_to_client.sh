#!/bin/bash
# Description: Switch wlanusb interface from Access Point (AP) mode to client mode
# Version: v0.1
# Copyright: Beekee 2026

set -e

# Stop AP only on wlanusb
sudo systemctl stop hostapd@wlanusb || true

# Remove AP IPv4 from wlanusb
sudo ip addr flush dev wlanusb

# Reset wlanusb so NetworkManager can take ownership cleanly
sudo ip link set wlanusb down
sleep 1
sudo ip link set wlanusb up
sleep 1

# Start NetworkManager
sudo systemctl start NetworkManager

# Verify NetworkManager is really running
systemctl is-active --quiet NetworkManager || { echo "NetworkManager failed to start"; exit 1; }

# Make sure wlanint still has its AP IPv4
ip addr show wlanint | grep -q "10.0.0.1/24" || sudo ip addr add 10.0.0.1/24 dev wlanint

# Recover wlanint AP only if it is actually missing
iw dev wlanint info | grep -q "type AP" || sudo systemctl restart hostapd@wlanint

# Optional status output
echo "=== wlanint ==="
ip addr show dev wlanint
echo
echo "=== wlanusb ==="
ip addr show dev wlanusb
echo
echo "=== NetworkManager ==="
systemctl is-active NetworkManager

# To be removed: managed by Beekee Home
#sudo nmcli connection delete "NaturalMystik" 2>/dev/null || true
#sudo nmcli device wifi connect "NaturalMystik" password "38B8c777vz4d3Afn" ifname wlanusb
