import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
if (headerMatch) {
  fs.writeFileSync('scripts/header.html', headerMatch[0]);
  console.log('Saved header.html, length:', headerMatch[0].length);
}
