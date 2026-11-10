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

bgUrls.forEach(u => {
  const filename = u.split('/').pop();
  const existsInSite = fs.existsSync(path.join('public', 'images', 'site', filename));
  const existsInImages = fs.existsSync(path.join('public', 'images', filename));
  console.log(`${filename}: site=${existsInSite}, root=${existsInImages}`);
});

