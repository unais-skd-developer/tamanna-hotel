import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const eternity5Pos = html.indexOf('Eternity-Banquet5-1-scaled.jpg');
console.log('Pos:', eternity5Pos);
console.log('Context:', html.slice(Math.max(0, eternity5Pos - 200), eternity5Pos + 300));

