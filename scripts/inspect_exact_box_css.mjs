import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const ids = ['167daa4', 'ad984cd', '4b85006', '89e8816'];
for (const id of ids) {
  const regex = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'g');
  let m;
  console.log(`=== CSS for ${id} ===`);
  while ((m = regex.exec(html)) !== null) {
    console.log(m[0]);
  }
}

