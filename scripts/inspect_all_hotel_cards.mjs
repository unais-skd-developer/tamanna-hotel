import fs from 'fs';

const html = fs.readFileSync('scripts/pages/hotels.html', 'utf8');

// Match each parent container for hotels
const regex = /<div class="elementor-element elementor-element-([a-f0-9]+)[^"]*e-parent[^"]*"[^>]*>[\s\S]*?<h2 class="ekit-heading--title elementskit-section-title ">([^<]+(?:<span[^>]*>[^<]+<\/span>)?[^<]*)<\/h2>[\s\S]*?<div class="elementor-widget-container">\s*<p>([^<]+)<\/p>[\s\S]*?View Hotel[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

// Let's inspect all headings and their texts
const titles = [...html.matchAll(/<h2 class="ekit-heading--title elementskit-section-title ">([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('All ekit titles:', titles);

