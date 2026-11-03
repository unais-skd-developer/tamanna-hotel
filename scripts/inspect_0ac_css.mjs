import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const regex = /\.elementor-element-0ac3936[^{]*\{[^}]*\}/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}

