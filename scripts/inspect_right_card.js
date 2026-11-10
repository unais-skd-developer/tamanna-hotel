const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const start = html.indexOf('Book your perfect getaway now!');
console.log('Right sidebar card HTML:');
console.log(html.slice(start - 400, start + 1200));

