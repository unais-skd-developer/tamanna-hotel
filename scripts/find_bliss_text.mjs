import fs from 'fs';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');

console.log('Treasured Memory index:', html.indexOf('Treasured Memory'));
console.log('Inviting Poolside index:', html.indexOf('Inviting'));
console.log('Bliss index:', html.indexOf('Bli'));

