import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('scripts/pages');
const allImages = new Set();

for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const html = fs.readFileSync(path.join('scripts/pages', file), 'utf-8');
  
  // Extract img src
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = imgRegex.exec(html)) !== null) {
    const src = m[1];
    if (src.includes('tamannahotels.com/wp-content/uploads/') && !src.includes('avatar') && !src.includes('casino')) {
      allImages.add(src);
    }
  }

  // Extract css background-image
  const bgRegex = /background(?:-image)?\s*:\s*url\((?:["']?)(https?:\/\/[^"')]+tamannahotels\.com\/wp-content\/uploads\/[^"')]+)(?:["']?)\)/gi;
  while ((m = bgRegex.exec(html)) !== null) {
    allImages.add(m[1]);
  }
}

console.log(`Found ${allImages.size} unique image URLs from Tamanna Hotels uploads!`);

const imgList = Array.from(allImages);
fs.writeFileSync('scripts/extracted_images.json', JSON.stringify(imgList, null, 2));

// Print first 20
console.log('Sample images:');
imgList.slice(0, 20).forEach(u => console.log(u));

