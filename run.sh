#!/bin/bash

echo "==================================================="
echo "Starting Adaptive Learning Overlay Prototype"
echo "==================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "[ERROR] Node.js is not installed or not in PATH."
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

echo "[1/3] Node.js is installed."
echo ""

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "[2/3] Installing dependencies... This may take a minute."
    npm install
else
    echo "[2/3] Dependencies already installed."
fi

echo ""
echo "[3/3] Starting the development server..."
echo "The application will open in your default browser automatically."
echo ""

# Start Vite dev server and open browser
npm run dev -- --open
