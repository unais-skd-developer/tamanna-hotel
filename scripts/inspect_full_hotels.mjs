import fs from 'fs';

const html = fs.readFileSync('scripts/pages/hotels.html', 'utf8');

const keys = [
  'Grand <span>Tamanna',
  'Premier <span>Tamanna',
  'bizz <span>Tamanna',
  'Executive <span>Tamanna',
  'shree inn by <span>Tamanna',
  'Imperial <span>Tamanna'
];

keys.forEach((k, i) => {
  const pos = html.indexOf(k);
  const nextPos = i < keys.length - 1 ? html.indexOf(keys[i+1]) : html.indexOf('Reach Out');
  const chunk = html.slice(pos - 1000, nextPos);
  
  console.log('==============================');
  console.log('KEY:', k);
  
  // Description
  const p = chunk.match(/<div class="elementor-widget-container">\s*<p>([\s\S]*?)<\/p>/);
  console.log('DESC:', p ? p[1].trim() : 'NONE');
  
  // Features (Icon lists)
  const items = [...chunk.matchAll(/<li class="elementor-icon-list-item[^"]*">([\s\S]*?)<\/li>/g)].map(m => {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    const icon = m[1].match(/class="([^"]*(?:huge|hm|e-font-icon)[^"]*)"/);
    return { text, icon: icon ? icon[1] : 'none' };
  });
  console.log('ITEMS:', items);
  
  // Buttons
  const btns = [...chunk.matchAll(/<a class="elementor-button[^"]*" href="([^"]+)">[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/g)].map(m => ({
    text: m[2].trim(),
    href: m[1]
  }));
  console.log('BUTTONS:', btns);
});

