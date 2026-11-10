import fs from 'fs';

const html = fs.readFileSync('scripts/pages/offers.html', 'utf8');

const matches = [...html.matchAll(/Online-Discount-Coupon-Executive[^\s"']*/g)];
console.log('Matches:', new Set(matches.map(m => m[0])));

