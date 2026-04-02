# AI Job Discovery Dashboard

A live job discovery and tracking tool built to help users find better-fit jobs faster, prioritize them with explainable recommendations, and manage application activity in one place.

## What it does

- reads jobs from a live feed file
- ranks jobs based on user target role, category, work type, and keywords
- explains why a job matches
- lets users mark jobs as:
  - Saved
  - Interviewed
  - Rejected
- tracks job activity in a built-in pipeline
- exports the current recommendation set
- includes a downloadable tracker workbook

## Current product flow

1. Enter a target role or keywords
2. Select category and work type
3. Add must-have keywords
4. Click **Find My Jobs**
5. Review the top ranked jobs
6. Save, reject, or move jobs through the pipeline
7. Export current jobs or download the tracker workbook

## Files in this repo

- `index.html`  
  Main dashboard file for GitHub Pages

- `jobs_feed.json`  
  Live job feed used by the dashboard

- `demo_job_tracker_table.xlsx`  
  Base tracker workbook with filters and structure

- `live_feed_worker_template.js`  
  Starter worker file for future automated feed refresh

## GitHub Pages setup

This site should be published from:

- Branch: `main`
- Folder: `/(root)`

## Required repo structure

```text
index.html
jobs_feed.json
demo_job_tracker_table.xlsx
live_feed_worker_template.js
README.md
