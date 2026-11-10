import fs from 'fs';
import path from 'path';

const offerImgs = [
  'https://tamannahotels.com/wp-content/uploads/2025/07/grand-tamanna.webp',
  'https://tamannahotels.com/wp-content/uploads/2025/08/PHOTO-2024-05-07-18-58-48.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Online-Discount-Coupon-Executive.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-11-at-00.21.41-819x1024.jpeg',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Nirvana_banner_27_6_2024_page-0001.jpg',
  'https://tamannahotels.com/wp-content/uploads/2025/09/Tamanna_standy-5x3_29_aug_2025-1.png',
  'https://tamannahotels.com/wp-content/uploads/2025/08/Online-Discount-Grand.jpg'
];

offerImgs.forEach(u => {
  const filename = u.split('/').pop();
  const exists = fs.existsSync(path.join('public', 'images', 'site', filename));
  console.log(`${filename}: ${exists}`);
});

