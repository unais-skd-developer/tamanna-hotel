import fs from 'fs';
import path from 'path';

const downloads = [
  'https://tamannahotels.com/wp-content/uploads/2025/09/Maple-Conference-Room-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Maple-Dining-Area.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Reception-Area-scaled.jpg'
];

async function run() {
  for (const url of downloads) {
    const filename = path.basename(url);
    const dest = path.join('public/images/site', filename);
    console.log(`Downloading ${url}...`);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`Saved ${dest} (${buf.length} bytes)`);
      } else {
        console.log(`Failed ${url}: ${res.status}`);
      }
    } catch (e) {
      console.log(`Error ${url}: ${e.message}`);
    }
  }
}

run();

