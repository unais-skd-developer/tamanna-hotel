import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('Executive/Bizz/Shree inn:');
console.log(html.slice(idx - 3000, idx));

