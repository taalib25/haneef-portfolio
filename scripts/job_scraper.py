#!/usr/bin/env python3
"""
Job Scraper - Saves to CSV
Targets: React Native, AI Engineer, AI Automation, Software Engineer
"""

import csv
import os
import json
from datetime import datetime
from pathlib import Path

# Output file
OUTPUT_DIR = Path.home() / ".openclaw" / "workspace" / "jobs"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
CSV_FILE = OUTPUT_DIR / f"jobs_{datetime.now().strftime('%Y%m%d')}.csv"

# Job search URLs - LinkedIn
SEARCH_QUERIES = [
    ("React Native Developer", "https://www.linkedin.com/jobs/search/?keywords=React%20Native%20Developer&location=Worldwide&geoId=92000000&f_TPR=r86400&position=1&pageNum=0"),
    ("AI Engineer", "https://www.linkedin.com/jobs/search/?keywords=AI%20Engineer&location=Worldwide&geoId=92000000&f_TPR=r86400&position=1&pageNum=0"),
    ("AI Automation Engineer", "https://www.linkedin.com/jobs/search/?keywords=AI%20Automation%20Engineer&location=Worldwide&geoId=92000000&f_TPR=r86400&position=1&pageNum=0"),
    ("Software Engineer", "https://www.linkedin.com/jobs/search/?keywords=Software%20Engineer&location=Worldwide&geoId=92000000&f_TPR=r86400&position=1&pageNum=0"),
    ("Full Stack Engineer", "https://www.linkedin.com/jobs/search/?keywords=Full%20Stack%20Engineer&location=Worldwide&geoId=92000000&f_TPR=r86400&position=1&pageNum=0"),
]

def init_csv():
    """Initialize CSV with headers"""
    with open(CSV_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Title', 'Company', 'Location', 'URL', 'Source', 'Date'])

def add_job(title, company, location, url, source='LinkedIn'):
    """Add a job to CSV"""
    # Avoid duplicates
    with open(CSV_FILE, 'r', encoding='utf-8') as f:
        existing = f.read()
    
    if url in existing:
        return False
    
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([title, company, location, url, source, datetime.now().strftime('%Y-%m-%d')])
    return True

if __name__ == "__main__":
    init_csv()
    print(f"✅ Job scraper initialized")
    print(f"📁 Output: {CSV_FILE}")
    print(f"\nSearch queries configured:")
    for role, url in SEARCH_QUERIES:
        print(f"  - {role}")
    print(f"\n⚠️  LinkedIn blocks direct scraping.")
    print(f"👉 Use OpenClaw browser to extract jobs interactively.")
