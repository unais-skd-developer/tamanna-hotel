import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const ids = ['dfcb9ee', 'faa5130', 'c8b7303', '8bbd819'];
for (const id of ids) {
  const regex = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'g');
  let m;
  console.log(`--- Rules for ${id} ---`);
  while ((m = regex.exec(html)) !== null) {
    console.log(m[0]);
  }
}

