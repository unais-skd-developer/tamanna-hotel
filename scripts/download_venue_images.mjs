import fs from 'fs';
import path from 'path';

const bgUrls = [
  'https://tamannahotels.com/wp-content/uploads/2025/09/Eternity-Banquet5-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/07/15.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Eternity-Banquet3-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/3rd-Floor-Banquet2-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Pool-Sode-area3-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Board-Room1-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Premier-Tamanna-Hotel-meeting-hall-photo-4.webp',
  'https://tamannahotels.com/wp-content/uploads/2025/07/bizz-laurel.webp',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Highland2-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Maple-Conference-Room-3-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Oak-Party-Hall-1-scaled.jpg',
  'https://tamannahotels.com/wp-content/uploads/2026/06/ITH-084.webp',
  'https://tamannahotels.com/wp-content/uploads/2026/06/Sammelan-Banquet-3.jpg'
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'site');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadImages() {
  for (const url of bgUrls) {
    const filename = url.split('/').pop();
    const dest = path.join(targetDir, filename);
    if (fs.existsSync(dest)) {
      console.log(`Skipping (already exists): ${filename}`);
      continue;
    }
    console.log(`Downloading ${url}...`);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://tamannahotels.com/'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${url}: ${res.status} ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err);
    }
  }
}

downloadImages();

