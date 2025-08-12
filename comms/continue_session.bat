@echo off
:: This script helps to re-establish context in a new Gemini CLI session.
:: It pipes the previous conversation log and the current code to the `gcloud alpha gemini chat` command.
::
:: Usage:
::   continue_session.bat <log_file> <code_directory> [prompt]

if "%~1"=="" (
    echo Usage: %0 ^<log_file^> ^<code_directory^> [prompt]
    exit /b 1
)

if "%~2"=="" (
    echo Usage: %0 ^<log_file^> ^<code_directory^> [prompt]
    exit /b 1
)

set LOG_FILE=%1
set CODE_DIR=%2
set PROMPT=%~3

if not exist "%LOG_FILE%" (
    echo Error: Log file not found: %LOG_FILE%
    exit /b 1
)

if not exist "%CODE_DIR%" (
    echo Error: Code directory not found: %CODE_DIR%
    exit /b 1
)

if not defined PROMPT (
    set PROMPT=Okay, I'm back. Based on our previous conversation (pasted above) and the current code in the directory, let's continue.
)

(type "%LOG_FILE%" & echo %PROMPT%) | gcloud alpha gemini chat --context="file://%CODE_DIR%"