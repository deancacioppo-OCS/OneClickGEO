# Session Workflow

This document outlines the workflow for maintaining context and memory between Gemini CLI sessions.

## The Core Problem

Each `gcloud alpha gemini chat` session is independent and does not retain memory from previous sessions. This requires manually re-establishing context at the beginning of each new session.

## The Efficient Developer Workflow

This workflow treats the Gemini CLI as a powerful tool that you direct, while maintaining the "source of truth" (the code and conversation history) yourself.

### Step 1: Save the Conversation (External Memory)

Before starting a new session, use the `script` command to record the entire terminal session to a log file.

```bash
script gemini_session_log.txt
```

This log file becomes the "external memory" of the session.

### Step 2: Save the Code (Project's Reality)

As Gemini generates code, save it to the actual project files (e.g., `App.tsx`, `components/Pricing.tsx`, etc.).

### Step 3: Commit to Version Control (Professional Standard)

After saving the code, commit it to Git to permanently save the state of the project.

```bash
git add .
git commit -m "feat: Implement new feature with Gemini's help"
git push
```

### Step 4: Re-establishing Context on Your Return (The 30-Second Catch-up)

In the next session, use the saved log file and the current code to instantly give Gemini its memory back.

```bash
cat gemini_session_log.txt | gcloud alpha gemini chat \
  --context="file://src/"
  --prompt="Okay, I'm back. Based on our previous conversation (pasted above) and the current code in the 'src' directory, let's continue."
```

This command pipes the previous conversation and the current code to the new chat session, providing immediate context.

```