const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const imgMatches = html.match(/https:\/\/tamannahotels\.com\/wp-content\/uploads\/[^\s"'>]+/g) || [];
console.log('Unique uploads images:');
console.log([...new Set(imgMatches)]);

const h1Matches = html.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi) || [];
console.log('Headings:');
h1Matches.slice(0, 15).forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));

