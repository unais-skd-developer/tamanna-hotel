import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Check container tags
const sectionMatches = [...html.matchAll(/<div[^>]*class=["']([^"']*(?:elementor-top-section|elementor-section)[^"']*)["'][^>]*>/gi)];
console.log('Found elementor top sections:', sectionMatches.length);

// Let's print out the structure of the page
const widgets = [...html.matchAll(/data-widget_type=["']([^"']*)["']/gi)].map(m => m[1]);
console.log('Widgets count:', widgets.length);
console.log('Widget types:', [...new Set(widgets)]);

// Let's find headings and content blocks to see every section of the home page
const headings = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
console.log('\n--- HEADINGS ON HOMEPAGE ---');
headings.forEach(h => console.log('•', h));

