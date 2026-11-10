import fs from 'fs';

const html = fs.readFileSync('scripts/pages/executive-tamanna.html', 'utf8');
const links = html.match(/https?:\/\/[^"'\s]+/g) || [];
const roomLinks = links.filter(l => l.includes('best-hotel-room') || l.includes('room'));
console.log('Room links in executive-tamanna.html:', [...new Set(roomLinks)]);

