import fs from 'fs';

const content = fs.readFileSync('scripts/daily_baker_main.html', 'utf8');

// Parse top-level containers in elementor-24
// In Elementor flex container layout, top-level containers have classes "e-con-full e-flex e-con e-parent"
const containerRegex = /<div [^>]*class="elementor-element elementor-element-([a-z0-9]+)[^"]*e-parent[^"]*"[^>]*>/g;
let m;
const indices = [];
while ((m = containerRegex.exec(content)) !== null) {
  indices.push({ id: m[1], index: m.index });
}

console.log('Top level parent containers:', indices.length);

for (let i = 0; i < indices.length; i++) {
  const current = indices[i];
  const next = indices[i + 1] ? indices[i + 1].index : content.length;
  const chunk = content.substring(current.index, next);
  console.log(`\n================ CONTAINER ${i + 1} (id: ${current.id}) ================`);
  
  // Extract images
  const imgs = [...chunk.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(x => x[1]);
  if (imgs.length) console.log('Images:', imgs);
  
  // Extract headings
  const headings = [...chunk.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(x => x[1].replace(/<[^>]+>/g, '').trim());
  if (headings.length) console.log('Headings:', headings);

  // Extract paragraphs
  const p = [...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(x => x[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  if (p.length) console.log('Paragraphs:', p);

  // Extract links / buttons
  const links = [...chunk.matchAll(/<a [^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(x => ({
    href: x[1],
    text: x[2].replace(/<[^>]+>/g, '').trim()
  })).filter(x => x.text || x.href);
  if (links.length) console.log('Links:', links);
}

