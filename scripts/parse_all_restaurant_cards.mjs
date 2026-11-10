import fs from 'fs';

const html = fs.readFileSync('scripts/pages/restaurants.html', 'utf8');

const cards = [
  { name: 'Around the World', tag: 'Grand  Tamanna Hotel' },
  { name: 'Nirvana', tag: 'Grand Tamanna Hotel' },
  { name: 'Premier', tag: 'Premier  Tamanna Hotel' },
  { name: 'Talk about', tag: 'bizz  Tamanna Hotel' },
  { name: 'Executive Multi', tag: 'executive  Tamanna Hotel' },
  { name: 'South Indian', tag: 'executive  Tamanna Hotel' },
  { name: 'Urban Platter', tag: 'Imperial Tamanna Hotel' }
];

// Let's find each e-parent card container in restaurants.html
const parentRegex = /<div class="elementor-element elementor-element-([a-f0-9]+) e-flex e-con-boxed e-con e-parent"[\s\S]*?View More[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

// Let's parse all cards systematically
const parents = [...html.matchAll(/class="elementor-element elementor-element-([a-f0-9]+)[^"]*e-parent[^"]*"[^>]*>([\s\S]*?)(?=(?:class="elementor-element elementor-element-[a-f0-9]+[^"]*e-parent)|$)/g)];

console.log('Total parent sections:', parents.length);

parents.forEach((p, idx) => {
  const content = p[2];
  if (!content.includes('View More') && !content.includes('View Map')) return;
  
  const h2Match = content.match(/<h2 class="ekit-heading--title elementskit-section-title ">([\s\S]*?)<\/h2>/);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NONE';
  
  const pMatch = content.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
  const desc = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : 'NONE';
  
  const bgMatch = content.match(/background-image:url\("([^"]+)"\)/);
  const bg = bgMatch ? bgMatch[1].split('/').pop() : 'NONE';
  
  const items = [...content.matchAll(/<span class="elementor-icon-list-text">([\s\S]*?)<\/span>/g)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim());
  
  const btns = [...content.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)">[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/g)].map(m => ({
    text: m[2].trim(),
    href: m[1]
  }));
  
  console.log(`\n--- Card ${idx} ---`);
  console.log('H2:', h2);
  console.log('Desc:', desc);
  console.log('BG:', bg);
  console.log('Items:', items);
  console.log('Buttons:', btns);
});

