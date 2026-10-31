import fs from 'fs';

const details = JSON.parse(fs.readFileSync('scripts/pages_detailed_data.json', 'utf-8'));

for (const [name, data] of Object.entries(details)) {
  console.log(`\n================== ${name.toUpperCase()} ==================`);
  console.log('Title:', data.title);
  console.log('Headings:', data.headings.map(h => `${h.tag}:${h.text}`).join(' -> '));
  console.log('Paragraphs:', data.sampleParagraphs.length);
  if (data.sampleParagraphs.length > 0) {
    console.log('Intro text:', data.sampleParagraphs[0].slice(0, 200));
  }
}
