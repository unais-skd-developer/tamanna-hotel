import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

// Find all CSS root variables
const rootVars = [...html.matchAll(/--ast-global-color-[0-9]:\s*([^;]+);/gi)].map(m => m[0]);
console.log('--- ASTRA CSS VARS ---');
console.log(rootVars);

// Find elementor custom styles or colors
const colorMatches = [...html.matchAll(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/gi)].map(m => m[0]);
const colorFreq = {};
for (const c of colorMatches) {
  const norm = c.toLowerCase();
  colorFreq[norm] = (colorFreq[norm] || 0) + 1;
}
const sortedColors = Object.entries(colorFreq).sort((a,b) => b[1] - a[1]);
console.log('--- TOP COLORS ---');
console.log(sortedColors.slice(0, 25));

// Find font-family occurrences
const fontMatches = [...html.matchAll(/font-family:\s*([^;!]+)/gi)].map(m => m[1].trim());
const fontFreq = {};
for (const f of fontMatches) {
  fontFreq[f] = (fontFreq[f] || 0) + 1;
}
console.log('--- FONT FAMILIES ---');
console.log(Object.entries(fontFreq).sort((a,b) => b[1] - a[1]).slice(0, 15));

