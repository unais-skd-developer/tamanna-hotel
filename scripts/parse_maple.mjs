import fs from 'fs';

const html = fs.readFileSync('scripts/pages/best-meeting-hall-hinjawadi-pune.html', 'utf8');

const capMatches = [...html.matchAll(/<div class="elementor-widget-container">\s*<div class="elementor-icon-box-wrapper">([\s\S]*?)<\/div>\s*<\/div>/gis)];
capMatches.forEach((m, i) => {
  const iTag = m[1].match(/<i[^>]*class="([^"]*)"/)?.[1];
  const svg = m[1].match(/<svg[^>]*>.*?<\/svg>/gis)?.[0];
  console.log(`Card ${i+1}: iTag = ${iTag}, hasSvg = ${!!svg}`);
});
