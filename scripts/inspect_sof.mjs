import fs from 'fs';

const buf = fs.readFileSync('public/images/site/Online-Discount-Coupon-Executive.jpg');
// Let's find all SOF markers:
for (let i = 0; i < buf.length - 8; i++) {
  if (buf[i] === 0xFF && (buf[i+1] === 0xC0 || buf[i+1] === 0xC2)) {
    const h = buf.readUInt16BE(i + 5);
    const w = buf.readUInt16BE(i + 7);
    console.log(`Found marker at ${i}: ${w}x${h}`);
  }
}

