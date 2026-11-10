const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const footerIdx = html.indexOf('Tamanna Hotel Offers Premium Stays');
console.log('Footer index:', footerIdx);
if (footerIdx !== -1) {
  console.log(html.slice(footerIdx - 800, footerIdx + 2500));
}

