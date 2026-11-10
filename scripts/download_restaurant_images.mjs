import fs from 'fs';

const html = fs.readFileSync('scripts/pages/restaurants.html', 'utf8');

const list = [
  'Nirvana-2-1-scaled.jpg',
  'grand-restaurant2-scaled.avif',
  'Nirvana-3-scaled.jpg',
  'Premier-restaurant2.webp',
  'Restaurant-1st-Floor1-1-scaled.jpg',
  'MultiCuisine-Restaurant-3-scaled.jpg',
  '56.jpg',
  'ITH-032.webp'
];

async function downloadAll() {
  for (const name of list) {
    const target = 'public/images/site/' + name;
    if (fs.existsSync(target)) {
      console.log('Exists:', name);
      continue;
    }
    // find url in html
    const reg = new RegExp('https:\\/\\/tamannahotels\\.com\\/wp-content\\/uploads\\/[^"\'\\s]+' + name, 'i');
    const m = html.match(reg);
    if (!m) {
      console.log('Not found in html:', name);
      continue;
    }
    const url = m[0];
    console.log('Downloading:', name, 'from', url);
    try {
      const res = await fetch(url);
      if (res.ok) {
        fs.writeFileSync(target, Buffer.from(await res.arrayBuffer()));
        console.log('Downloaded:', name);
      } else {
        console.log('Failed status:', res.status, name);
      }
    } catch(e) {
      console.log('Error downloading', name, e.message);
    }
  }
}

downloadAll();

