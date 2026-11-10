import fs from 'fs';

const html = fs.readFileSync('scripts/pages/hotels.html', 'utf8');

const hotelNames = [
  'Grand',
  'Premier',
  'bizz',
  'Executive',
  'shree inn by',
  'Imperial'
];

const results = [];

hotelNames.forEach(name => {
  const start = html.indexOf(name + ' <span>Tamanna');
  if (start === -1) return;
  const chunk = html.slice(start - 2000, start + 7000);
  
  // Image
  const imgMatch = chunk.match(/background-image:url\("([^"]+)"\)/);
  
  // Description
  const descMatch = chunk.match(/<div class="elementor-widget-container">\s*<p>([^<]+)<\/p>/);
  
  // Feature items
  const iconItems = [...chunk.matchAll(/<span class="elementor-icon-list-text">([^<]+)<\/span>/g)].map(m => m[1].trim());
  
  // Map link
  const mapMatch = chunk.match(/href="([^"]+google\.com\/maps[^"]+)"/);
  
  // Hotel link
  const hotelMatch = chunk.match(/href="([^"]+tamannahotels\.com\/[^"]+)"/);
  
  // Book Now link
  const bookMatch = chunk.match(/href="([^"]+bookings\.resavenue\.com[^"]+)"/);
  
  results.push({
    name,
    img: imgMatch ? imgMatch[1] : null,
    desc: descMatch ? descMatch[1] : null,
    items: iconItems,
    mapLink: mapMatch ? mapMatch[1] : null,
    hotelLink: hotelMatch ? hotelMatch[1] : null,
    bookLink: bookMatch ? bookMatch[1] : null,
  });
});

console.log(JSON.stringify(results, null, 2));

