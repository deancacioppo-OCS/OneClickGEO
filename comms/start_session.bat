@echo off
:: This script starts a new, logged Gemini CLI session using PowerShell's Start-Transcript.
::
:: Usage:
::   start_session.bat [log_file_name]
::
:: If no log file name is provided, it will default to gemini_session_log.txt.

set LOG_FILE=%1
if not defined LOG_FILE (set LOG_FILE=gemini_session_log.txt)

echo Starting new logged session. Log file: %LOG_FILE%
echo To end the session, type 'exit' in the PowerShell window.

powershell.exe -Command "Start-Transcript -Path '%LOG_FILE%'; Write-Host 'You are now in a logged PowerShell session.'; $host.UI.RawUI.WindowTitle = 'Logged Gemini Session'"