import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

const matches = [...html.matchAll(/[^{}]+{[^{}]*Eternity-Banquet5[^{}]*}/g)];
matches.forEach(m => console.log('Rule:', m[0]));

