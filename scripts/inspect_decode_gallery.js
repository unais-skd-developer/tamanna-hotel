const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');
const m = html.match(/data-gallery-items="([^"]+)"/);
if (m) {
  const decoded = Buffer.from(m[1], 'base64').toString('utf8');
  const arr = JSON.parse(decoded);
  console.log('Decoded gallery items count:', arr.length);
  arr.forEach((item, idx) => {
    const src = (item.match(/src=['"]([^'"]+)['"]/) || [])[1];
    const alt = (item.match(/alt=['"]([^'"]*)['"]/) || [])[1];
    console.log(`Gallery ${idx + 1}: src=${src}, alt=${alt}`);
  });
}

