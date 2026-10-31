import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Find all elements with data-widget_type and print their id, widget type, and text content
const re = /data-id="([^"]+)"[^>]*data-widget_type="([^"]+)"[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi;
let match;
console.log('--- WIDGET DETAILS ---');
let i = 0;
while ((match = re.exec(html)) !== null) {
  i++;
  const id = match[1];
  const widget = match[2];
  const rawContent = match[3];
  const cleanContent = rawContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);
  console.log(`[${i}] ID: ${id} | Widget: ${widget}`);
  if (cleanContent) {
    console.log(`     Text: "${cleanContent}"`);
  }
}
