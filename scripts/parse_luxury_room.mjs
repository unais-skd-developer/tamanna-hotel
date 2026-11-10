import fs from 'fs';

const html = fs.readFileSync('scripts/pages/top-hotel-luxury-rooms-hinjawadi-pune.html', 'utf8');

const m = html.search(/step into a world/i);
console.log(html.slice(m - 50, m + 600));
