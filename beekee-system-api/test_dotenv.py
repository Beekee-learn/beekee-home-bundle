#!/usr/bin/env python3
"""Test if .env is loaded"""

import os

print("="*60)
print("TEST 1: Sans load_dotenv()")
print("="*60)
print(f"MOCK_MODE = {os.environ.get('MOCK_MODE')}")
print(f"SECRET_KEY = {os.environ.get('SECRET_KEY')}")
print(f"LOG_LEVEL = {os.environ.get('LOG_LEVEL')}")

print("\n" + "="*60)
print("TEST 2: Avec load_dotenv()")
print("="*60)
from dotenv import load_dotenv
load_dotenv()

print(f"MOCK_MODE = {os.environ.get('MOCK_MODE')}")
print(f"SECRET_KEY = {os.environ.get('SECRET_KEY')}")
print(f"LOG_LEVEL = {os.environ.get('LOG_LEVEL')}")