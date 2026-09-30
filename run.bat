@echo off
echo ===================================================
echo Starting Adaptive Learning Overlay Prototype
echo ===================================================

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b
)

echo [1/3] Node.js is installed.
echo.

:: Check if node_modules exists, if not install dependencies
if not exist "node_modules\" (
    echo [2/3] Installing dependencies... This may take a minute.
    call npm install
) else (
    echo [2/3] Dependencies already installed.
)

echo.
echo [3/3] Starting the development server...
echo The application will open in your default browser automatically.
echo.

:: Start Vite dev server and open browser
call npm run dev -- --open

pause
