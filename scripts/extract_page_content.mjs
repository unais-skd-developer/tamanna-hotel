import fs from 'fs';
import path from 'path';

function extractSections(html) {
  // Extract all elementor-widget blocks
  const re = /<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*elementor-widget elementor-widget-([^"]+)"[^>]*>[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi;
  let m;
  const widgets = [];
  while ((m = re.exec(html)) !== null) {
    const id = m[1];
    const type = m[2];
    const content = m[3];
    // filter out spam
    if (content.includes('Actualités récentes') || content.includes('casino')) continue;

    const heading = content.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i);
    const headingText = heading ? heading[1].replace(/<[^>]+>/g, '').trim() : null;

    const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const imgs = [...content.matchAll(/src=["']([^"']+)["']/gi)].map(x => x[1]).filter(x => !x.includes('casino') && !x.includes('avatar'));

    widgets.push({
      id,
      type,
      heading: headingText,
      text: text.slice(0, 300),
      images: imgs
    });
  }
  return widgets;
}

const pages = [
  'grand-tamanna',
  'premier-tamanna',
  'bizz-tamanna',
  'executive-tamanna',
  'shree-inn',
  'imperial-tamanna',
  'daily-baker',
  'about-us',
  'contact-us',
  'hotels',
  'restaurants',
  'wedding-party-venues',
  'offers',
  'gallery',
  'blogs'
];

const results = {};
for (const p of pages) {
  const filePath = `scripts/pages/${p}.html`;
  if (!fs.existsSync(filePath)) continue;
  const html = fs.readFileSync(filePath, 'utf-8');
  results[p] = extractSections(html);
}

fs.writeFileSync('scripts/parsed_all_pages.json', JSON.stringify(results, null, 2));
console.log('Saved parsed_all_pages.json');
