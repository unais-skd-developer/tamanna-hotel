import fs from 'fs';
const html = fs.readFileSync('scripts/footer.html', 'utf-8');

// Strip styles and scripts
const clean = html.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '');
console.log(clean.slice(0, 4000));

