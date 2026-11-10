import fs from 'fs';

const html = fs.readFileSync('scripts/pages/corporate-meeting-hall-hinjawadi-pune.html', 'utf8');

// Location tag and description
const m = html.search(/located in executive tamanna hotel/i);
if (m !== -1) {
  console.log(html.slice(m - 100, m + 800));
}

// Extract capacity and facility cards
console.log('\n--- CARDS ---');
const capMatches = [...html.matchAll(/<div class="elementor-widget-container">\s*<div class="elementor-icon-box-wrapper">([\s\S]*?)<\/div>\s*<\/div>/gis)];
capMatches.forEach((m, i) => {
  const title = m[1].match(/<h\d[^>]*class="elementor-icon-box-title"[^>]*>(.*?)<\/h\d>/gis)?.[0]?.replace(/<[^>]+>/g, '').trim();
  const desc = m[1].match(/<p[^>]*class="elementor-icon-box-description"[^>]*>(.*?)<\/p>/gis)?.[0]?.replace(/<[^>]+>/g, '').trim();
  const iTag = m[1].match(/<i[^>]*class="([^"]*)"/)?.[1];
  const svg = m[1].match(/<svg[^>]*>.*?<\/svg>/gis)?.[0];
  console.log(`Card ${i+1}: title = "${title}", desc = "${desc}", iTag = "${iTag}", hasSvg = ${!!svg}`);
});
