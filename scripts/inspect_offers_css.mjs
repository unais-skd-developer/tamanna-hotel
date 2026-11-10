import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');

const matches = [...html.matchAll(/\.elementor-element-472bb25[^{}]*{[^}]+}/g)];
matches.forEach(m => console.log('Parent container rule:', m[0]));

const childMatches = [...html.matchAll(/\.elementor-element-75f89cb[^{}]*{[^}]+}/g)];
childMatches.forEach(m => console.log('Child col 1 rule:', m[0]));

// Let's check max-width of container
const maxW = html.match(/--content-width:\s*([^;]+);/);
console.log('Content width:', maxW ? maxW[1] : 'none');

// Check gap
const gaps = [...html.matchAll(/--gap:\s*([^;]+);/g)].map(m => m[1]);
console.log('Gaps:', new Set(gaps));

