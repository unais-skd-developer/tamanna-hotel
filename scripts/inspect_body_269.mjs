import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');

console.log(html.slice(269579 - 1000, 269579 + 500));

