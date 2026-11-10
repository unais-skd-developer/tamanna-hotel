const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const pos = html.indexOf('86811e5');
const svgMatch = html.slice(pos, pos + 2000).match(/<svg[\s\S]*?<\/svg>/);
if (svgMatch) {
  console.log('Original Elementor SVG:');
  console.log(svgMatch[0]);
}

