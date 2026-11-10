import fs from 'fs';

const html = fs.readFileSync('scripts/pages/best-meeting-hall-hinjawadi-pune.html', 'utf8');

const classNames = ['4b82c3d'];
const m = html.search(/4b82c3d/);
console.log(html.slice(m - 300, m + 500));
