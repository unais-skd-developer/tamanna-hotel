import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Find all top-level containers inside elementor
const containerMatches = [...html.matchAll(/<div\s+class="elementor-element\s+elementor-element-([a-z0-9]+)\s+e-con-boxed\s+e-con\s+e-parent[^"]*"[^>]*>/gi)];
console.log('Parent containers:', containerMatches.length);
containerMatches.forEach((c, idx) => {
  console.log(`Parent ${idx}: ID=${c[1]}`);
});

// Let's search by keywords:
const keywords = [
  'Book Your Ideal Stay',
  'STYLE YOUR OWN JOURNEY',
  'Curated Hotel Spaces',
  'Our  Gallery',
  'Enjoy Your Stay At Our Hotel',
  'What They say about us',
  'Reach out',
  'Quick Links'
];

keywords.forEach(kw => {
  const pos = html.indexOf(kw);
  console.log(`\n=== Keyword: "${kw}" at pos ${pos} ===`);
  if (pos !== -1) {
    console.log(html.slice(Math.max(0, pos - 150), Math.min(html.length, pos + 400)));
  }
});

