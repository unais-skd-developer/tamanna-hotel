import fs from 'fs';

const html = fs.readFileSync('scripts/pages/restaurants.html', 'utf8');

const titles = [
  'Around the World',
  'Nirvana',
  'Multi Cuisine Restaurant',
  'Talk about',
  'Multi Cuisine Restaurant and Bar',
  'south Indian',
  'Urban Platter'
];

titles.forEach((t, i) => {
  const pos = html.indexOf(t);
  const nextPos = i < titles.length - 1 ? html.indexOf(titles[i+1], pos + 50) : html.indexOf('Reach Out');
  const chunk = html.slice(pos - 1500, nextPos);
  
  console.log('==============================');
  console.log('TITLE SEARCH:', t);
  
  // Heading
  const h2 = chunk.match(/<h2 class="ekit-heading--title elementskit-section-title ">([\s\S]*?)<\/h2>/);
  console.log('H2:', h2 ? h2[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NONE');
  
  // Hotel Tag (above heading)
  const tag = chunk.match(/<span class="elementor-icon-list-text">([^<]*(?:Tamanna|Hotel)[^<]*)<\/span>/);
  console.log('HOTEL TAG:', tag ? tag[1].trim() : 'NONE');
  
  // Description
  const p = chunk.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
  console.log('DESC:', p ? p[1].trim() : 'NONE');
  
  // Background image (search before pos)
  const bg = chunk.match(/background-image:url\("([^"]+)"\)/);
  console.log('BG:', bg ? bg[1].split('/').pop() : 'NONE');
  
  // Icon list items (features & address)
  const items = [...chunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('ITEMS:', items);
  
  // Buttons
  const btns = [...chunk.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)">[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/g)].map(m => ({
    text: m[2].trim(),
    href: m[1]
  }));
  console.log('BUTTONS:', btns);
});

