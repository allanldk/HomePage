#!/usr/bin/env python3
import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Projects - add data-i18n to badges
html = re.sub(r'<div class="project-badge">Latest</div>', 
              r'<div class="project-badge" data-i18n="projects.latest">Latest</div>', html)

# Projects - titles and descriptions
projects = [
    ('PhaseForge Scout', 'scout'),
    ('CashFlowCompass', 'cashflow'),
    ('Earnings Beat Screener', 'screener'),
    ('SophiasTrendChoice', 'sophia'),
    ('PhaseForge MarketState', 'marketstate'),
    ('PhaseForge Platform', 'phaseforge')
]

for title, key in projects:
    # Title
    html = re.sub(rf'(<h3 class="project-title">){title}(</h3>)',
                  rf'\1{title}</h3><!-- REPLACE_TITLE_{key} -->', html)
    # Description (more complex - find the p after this h3)

# About section
html = re.sub(r'(<h2 class="section-title">)About Me(</h2>)',
              r'\1<span data-i18n="about.title">About Me</span>\2', html)

html = re.sub(r'(<p class="lead">)\s*Passionate software developer with 15\+ years',
              r'\1<span data-i18n="about.lead">Passionate software developer with 15+ years', html, flags=re.DOTALL)

# This is getting complex - let me write a simpler sed-based approach
print("Using manual approach instead...")
