import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const regex = /\.elementor-element-(65a97fc|6c93a87|d797165|4d47790)[^{]*\{[^}]*\}/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}
