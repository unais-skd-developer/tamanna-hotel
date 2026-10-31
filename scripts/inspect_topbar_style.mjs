import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Search for top bar container ID: b3603f5
const idx = html.indexOf('b3603f5');
if (idx !== -1) {
  console.log(html.slice(idx - 300, idx + 800));
}

// Find style for b3603f5 or its parent container
const styleMatches = [...html.matchAll(/(\.elementor-element-b3603f5[^{]*\{[^}]+\})/gi)].map(m => m[1]);
console.log('Styles:', styleMatches);
