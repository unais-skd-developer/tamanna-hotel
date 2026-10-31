import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('scripts/pages').filter(f => f.endsWith('.html'));

const pageDetails = {};

for (const file of files) {
  const pageName = file.replace('.html', '');
  const html = fs.readFileSync(path.join('scripts/pages', file), 'utf-8');

  // Extract page title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : '';

  // Extract meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const description = metaDescMatch ? metaDescMatch[1] : '';

  // Extract main content between header and footer
  const headerIdx = html.indexOf('</header>');
  const footerIdx = html.indexOf('<footer');
  const mainContent = (headerIdx !== -1 && footerIdx !== -1)
    ? html.slice(headerIdx, footerIdx)
    : html;

  // Extract headings
  const headings = [...mainContent.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => ({ tag: m[1], text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() }))
    .filter(h => h.text && !h.text.includes('casino') && !h.text.includes('Actualités'));

  // Extract paragraphs / text editor blocks
  const paragraphs = [...mainContent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 25 && !p.includes('casino') && !p.includes('Actualités'));

  // Extract image paths
  const images = [...new Set([...mainContent.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]))]
    .filter(src => src.includes('/wp-content/uploads/') && !src.includes('casino') && !src.includes('avatar'));

  pageDetails[pageName] = {
    title,
    description,
    headings,
    paragraphCount: paragraphs.length,
    sampleParagraphs: paragraphs.slice(0, 10),
    imagesCount: images.length,
    images: images
  };
}

fs.writeFileSync('scripts/pages_detailed_data.json', JSON.stringify(pageDetails, null, 2));
console.log('Saved pages_detailed_data.json with all detailed page content!');

