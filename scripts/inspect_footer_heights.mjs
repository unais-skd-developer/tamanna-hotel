import fs from 'fs';
const html = fs.readFileSync('scripts/footer.html', 'utf-8');

const regex = /height[^{};]*:[^;}]+/g;
let m;
const matches = [];
while ((m = regex.exec(html)) !== null) {
  matches.push(m[0]);
}
console.log('Height matches:');
console.log([...new Set(matches)]);

