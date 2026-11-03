import fs from 'fs';
const html = fs.readFileSync('scripts/footer.html', 'utf-8');

console.log('Footer length:', html.length);
console.log(html.slice(0, 3000));
