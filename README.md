# AI Interview Form

A multilingual candidate pre-screening tool built for a company hiring remote AI voice-agent operators. Candidates take a timed grammar test (CEFR-scored, B2 cutoff varies by language) and answer scenario-based questions, then upload their CV and two screening documents (internet speed test, device specs) — all in one flow, in their own language.

**Live demo:** https://bigsnailbob.github.io/ai-interview-form/

## Languages

German, Spanish, French, English, Dutch, Italian — each with its own 30-40 question grammar bank and a per-language CEFR pass threshold (see `scripts/submitform.js` for the exact cutoffs, tuned per language after reviewing real results).

## Features

- 40-minute timer with auto-submit on timeout (partial answers still get saved and scored).
- Progress auto-saved to `localStorage` as the candidate types, so a refresh or accidental tab close doesn't lose their answers.
- Client-side file validation (PDF-only CV, image-only screenshots, 5MB size cap) before anything gets sent anywhere.
- Per-language CEFR level calculated from the grammar score (A2 through C1).

## About this build

This is a public demo build. The production version integrates with a private automation pipeline (file uploads to Google Drive, results forwarded to an n8n workflow for scoring/notification) that lives in an access-restricted repo. This copy simulates that submission step client-side — the full flow works end-to-end, it just doesn't call any real backend (see the `DEMO_MODE` flag in `scripts/submitform.js`).

## Stack

Vanilla JS (ES modules), no framework, no build step — deployed as static files.
