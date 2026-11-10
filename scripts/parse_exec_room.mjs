import fs from 'fs';

const html = fs.readFileSync('scripts/pages/best-hotel-room-hinjawadi-pune.html', 'utf8');

const m = html.indexOf('LED TV');
const end = html.indexOf('Booking Of Hotel Rooms');
const snippet = html.slice(m, end + 300);
console.log(snippet.replace(/<style[^>]*>.*?<\/style>/gis, ''));
