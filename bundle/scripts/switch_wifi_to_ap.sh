#!/bin/bash
# Description: Switch wlanusb interface from client mode to Access Point (AP) mode
# Version: v0.1
# Copyright: Beekee 2026

set -e

# Disconnect wlanusb from upstream Wi-Fi
sudo nmcli device disconnect wlanusb || true

# Stop NetworkManager
sudo systemctl stop NetworkManager

# Stop AP/client activity only on wlanusb
sudo systemctl stop hostapd@wlanusb || true

# Reset wlanusb so the kernel recreates the link-local IPv6
sudo ip link set wlanusb down
sleep 1
sudo ip link set wlanusb up
sleep 1

# Restore AP IPv4 cleanly
sudo ip addr flush dev wlanusb
sudo ip addr add 10.1.0.1/24 broadcast 10.1.0.255 dev wlanusb

# Make sure wlanint still has its IPv4
ip addr show wlanint | grep -q "10.0.0.1/24" || sudo ip addr add 10.0.0.1/24 dev wlanint

# Recover wlanint AP only if it is actually missing
iw dev wlanint info | grep -q "type AP" || sudo systemctl restart hostapd@wlanint

# Start AP on wlanusb
sudo systemctl start hostapd@wlanusb

# Restart dnsmasq
sudo systemctl restart dnsmasq

# Optional status output
echo "=== wlanint ==="
ip addr show dev wlanint
echo
echo "=== wlanusb ==="
ip addr show dev wlanusb
echo
echo "=== hostapd ==="
sudo systemctl --no-pager --full status hostapd@wlanint hostapd@wlanusb | sed -n '1,40p'
