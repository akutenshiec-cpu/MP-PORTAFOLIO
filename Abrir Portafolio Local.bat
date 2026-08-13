@echo off
setlocal
cd /d "%~dp0"

start "MP Portafolio Server" /min python -m http.server 4173 --bind 127.0.0.1
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173/index.html"

endlocal
