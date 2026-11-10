const fs = require('fs');
const html = fs.readFileSync('scripts/pages/standard-room-hinjawadi-pune.html', 'utf8');

const getawayIdx = html.indexOf('Book your perfect getaway now!');
console.log(html.slice(getawayIdx - 2000, getawayIdx - 500));

