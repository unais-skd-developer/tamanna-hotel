import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('<footer');
const start = idx !== -1 ? idx - 4000 : html.length - 4000;
console.log('Prefooter section before footer:');
console.log(html.slice(start, (idx !== -1 ? idx : html.length)));

