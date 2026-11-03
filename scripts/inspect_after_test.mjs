import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const idx = html.indexOf('data-id="89e8816"');
const nextIdx = html.indexOf('class="elementor-element', idx + 2000);
console.log('After testimonial slider:');
console.log(html.slice(nextIdx, nextIdx + 2000));
