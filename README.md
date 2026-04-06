# AI Job Discovery Dashboard

Universal role-search version.

## What changed
- exact title match is prioritized first
- broader role-family expansion supports jobs beyond analyst and operations
- must-have keywords and avoid keywords are used in ranking
- repetitive companies, domains, and near-duplicate title families are suppressed
- rejected jobs are strongly penalized
- recent jobs are cooldown-suppressed
- status changes persist in local storage

## Upload these files
- index.html
- jobs_feed.json
- demo_job_tracker_table.xlsx

## Rename before upload
- ai_job_dashboard_universal_search.html -> index.html
- jobs_feed_expanded_universal.json -> jobs_feed.json

## Search behavior
- searching `phlebotomist` returns phlebotomist roles first
- then related collection, specimen, or lab support roles
- then adjacent healthcare support roles if needed
