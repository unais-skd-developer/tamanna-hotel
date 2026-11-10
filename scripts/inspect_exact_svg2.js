const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.indexOf('Book your perfect getaway');
const svgMatch = html.slice(pos - 1500, pos).match(/<svg[\s\S]*?<\/svg>/);
if (svgMatch) {
  console.log('Original Elementor SVG:');
  console.log(svgMatch[0]);
}

