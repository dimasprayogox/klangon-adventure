@echo off
echo ========================================
echo   Klangon Adventure - Windows Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js found! Version:
node --version
echo.

echo Installing dependencies...
npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Starting Development Server...
echo ========================================
echo.
echo The website will open at: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.

npm run dev
pause
