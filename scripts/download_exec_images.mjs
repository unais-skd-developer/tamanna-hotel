import fs from 'fs';
import path from 'path';

const urls = [
  'https://tamannahotels.com/wp-content/uploads/2025/09/Executive-Room-7-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/07/unnamed-26.webp',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Executive-Room-1-2-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Executive-Room1-1-scaled.jpg'
];

async function download() {
  for (const url of urls) {
    const filename = path.basename(url);
    const dest = path.join('public/images/site', filename);
    console.log(`Downloading ${url} -> ${dest}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed ${url}: ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${dest} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }
}

download();

