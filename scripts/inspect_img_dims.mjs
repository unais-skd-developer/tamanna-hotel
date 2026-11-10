import fs from 'fs';

const buf = fs.readFileSync('public/images/site/Eternity-Banquet5-1-scaled.jpg');
let offset = 0;
while (offset < buf.length - 8) {
  if (buf[offset] === 0xFF && (buf[offset + 1] === 0xC0 || buf[offset + 1] === 0xC2)) {
    const height = buf.readUInt16BE(offset + 5);
    const width = buf.readUInt16BE(offset + 7);
    console.log(`Dimensions: ${width}x${height}`);
    break;
  }
  offset++;
}
