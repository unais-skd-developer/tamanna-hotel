async function check() {
  const res = await fetch('https://tamannahotels.com/wp-content/uploads/2025/08/Online-Discount-Coupon-Executive.jpg', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  console.log('Status:', res.status, 'Length:', res.headers.get('content-length'));
  const buf = Buffer.from(await res.arrayBuffer());
  console.log('Buffer len:', buf.length);
  let offset = 0;
  while (offset < buf.length - 8) {
    if (buf[offset] === 0xFF && (buf[offset + 1] === 0xC0 || buf[offset + 1] === 0xC2)) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      console.log(`Live Dimensions: ${width}x${height}`);
      break;
    }
    offset++;
  }
}
check();

