import fs from 'fs';

function extractSections(filename) {
  const html = fs.readFileSync(`scripts/pages/${filename}.html`, 'utf-8');
  console.log(`\n================== ${filename.toUpperCase()} ==================`);
  
  // Headings
  const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => m[2].replace(/<[^>]+>/g, '').trim())
    .filter(t => t && !t.includes('casino') && !t.includes('Actualités'));
  console.log('Headings:', headings);

  // Paragraphs
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 40 && !p.includes('casino') && !p.includes('Actualités') && !p.includes('menu-item'));
  console.log('Paragraphs count:', paragraphs.length);
  paragraphs.slice(0, 5).forEach((p, i) => console.log(`  [P${i+1}] ${p.slice(0, 150)}...`));

  // Images
  const imgs = [...new Set([...html.matchAll(/src=["']([^"']+\.(?:jpg|png|webp))["']/gi)].map(m => m[1]))]
    .filter(s => s.includes('/wp-content/uploads/') && !s.includes('avatar') && !s.includes('casino'));
  console.log('Images count:', imgs.length);
  console.log('Image sample:', imgs.slice(0, 5));
}

extractSections('restaurants');
extractSections('wedding-party-venues');
extractSections('offers');
extractSections('gallery');
extractSections('blogs');
