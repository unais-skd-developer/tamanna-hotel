import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const matches = html.match(/enquire|enquiry|book now|view more/gi);
console.log('Matches:', new Set(matches));

const buttonTexts = [...html.matchAll(/<span class="elementor-button-text">([\s\S]*?)<\/span>/g)].map(m => m[1].trim());
console.log('Button texts:', [...new Set(buttonTexts)]);

const titles = [...html.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
console.log('All headings (first 30):', titles.slice(0, 30));

