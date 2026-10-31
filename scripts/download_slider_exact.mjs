import fs from 'fs';
import path from 'path';

const filesToDownload = [
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/grand-tamanna.webp', name: 'grand-tamanna.webp' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/44646687_0.jpg', name: '44646687_0.jpg' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/Overview.jpg', name: 'Overview.jpg' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/12989608.jpg', name: '12989608.jpg' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/Shree-Inn-by-Tamanna.avif', name: 'Shree-Inn-by-Tamanna.avif' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-14.30.42.jpeg', name: 'WhatsApp-Image-2026-06-01-at-14.30.42.jpeg' },
  { url: 'https://tamannahotels.com/wp-content/uploads/2025/07/upscalemedia-transformed-3.png', name: 'upscalemedia-transformed-3.png' },
];

async function run() {
  for (const item of filesToDownload) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(path.join('public/images/site', item.name), buffer);
        console.log('Saved', item.name, buffer.length);
      } else {
        console.log('Failed', item.name, res.status);
      }
    } catch (e) {
      console.log('Error', item.name, e.message);
    }
  }
}

run();
