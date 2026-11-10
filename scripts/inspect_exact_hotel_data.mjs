import fs from 'fs';

const html = fs.readFileSync('scripts/pages/hotels.html', 'utf8');

// Find all background-images in hotels.html
const allBgs = [...html.matchAll(/\.elementor-element-([a-f0-9]+)[^{]*\{[^}]*background-image:url\("([^"]+)"\)/g)].map(m => ({
  id: m[1],
  url: m[2]
}));
console.log('Background images:', allBgs);

// Find each hotel's complete block
const hotels = [
  { key: 'Grand', name1: 'GRAND', name2: 'TAMANNA' },
  { key: 'Premier', name1: 'PREMIER', name2: 'TAMANNA' },
  { key: 'bizz', name1: 'BIZZ', name2: 'TAMANNA' },
  { key: 'Executive', name1: 'EXECUTIVE', name2: 'TAMANNA' },
  { key: 'shree inn by', name1: 'SHREE INN BY', name2: 'TAMANNA' },
  { key: 'Imperial', name1: 'IMPERIAL', name2: 'TAMANNA' },
];

hotels.forEach(h => {
  const pos = html.indexOf(h.key + ' <span>Tamanna');
  const parentStart = html.lastIndexOf('class="elementor-element elementor-element-', pos);
  // find the container id right before pos that has an image
  console.log(`\n--- ${h.name1} ${h.name2} ---`);
  // Look 3000 chars before and 8000 chars after
  const slice = html.slice(pos - 2500, pos + 8500);
  
  // Extract items
  const items = [...slice.matchAll(/<span class="elementor-icon-list-text">([\s\S]*?)<\/span>/g)].map(m => m[1].replace(/&amp;/g, '&').trim());
  console.log('Items:', items.slice(0, 10));
  
  // Extract links
  const mapLink = slice.match(/href="(https:\/\/[^"]*google\.com\/maps[^"]*)"/);
  const hotelLink = slice.match(/href="(https:\/\/tamannahotels\.com\/[^"]+)"/);
  const bookLink = slice.match(/href="(https:\/\/bookings\.resavenue\.com[^"]+)"/);
  
  console.log('Hotel link:', hotelLink ? hotelLink[1] : null);
  console.log('Map link:', mapLink ? mapLink[1] : null);
  console.log('Book link:', bookLink ? bookLink[1] : null);
});

