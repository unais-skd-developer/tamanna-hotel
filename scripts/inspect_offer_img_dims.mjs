import fs from 'fs';

const files = [
  'PHOTO-2024-05-07-18-58-48.jpg',
  'Online-Discount-Coupon-Executive.jpg',
  'WhatsApp-Image-2025-09-11-at-00.21.41-819x1024.jpeg',
  'Nirvana_banner_27_6_2024_page-0001.jpg',
  'Tamanna_standy-5x3_29_aug_2025-1.png',
  'Online-Discount-Grand.jpg'
];

function getDims(file) {
  const buf = fs.readFileSync('public/images/site/' + file);
  if (file.endsWith('.png')) {
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { width, height };
  }
  let offset = 0;
  while (offset < buf.length - 8) {
    if (buf[offset] === 0xFF && (buf[offset + 1] === 0xC0 || buf[offset + 1] === 0xC2)) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    offset++;
  }
  return { width: 800, height: 600 };
}

files.forEach(f => {
  console.log(f, getDims(f));
});

