import fs from 'fs';
const html = fs.readFileSync('scripts/home.html', 'utf-8');

const matches = [...html.matchAll(/what they say|say about|testimonial|Mahesh Godbole/gi)];
for (const m of matches) {
  console.log('Match at', m.index, m[0]);
  console.log(html.slice(Math.max(0, m.index - 100), m.index + 500));
  console.log('----------------------------------------------------');
}
