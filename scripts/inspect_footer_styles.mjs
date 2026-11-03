import fs from 'fs';
const html = fs.readFileSync('scripts/footer.html', 'utf-8');

const regex = /\.elementor-472[^{]*\{[^}]*\}/g;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[0].includes('color') || m[0].includes('font') || m[0].includes('border') || m[0].includes('width')) {
    console.log(m[0]);
  }
}

