const https = require('https');

https.get('https://tamannahotels.com/banquet-hall-chinchwad-pune/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const styles = [...data.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
    for (const s of styles) {
      if (s.includes('06c882b')) {
        const matches = s.match(/\.elementor-element-06c882b[^{]*\{[^}]*\}/g);
        console.log('CSS for 06c882b:', matches);
        const idx = s.indexOf('06c882b');
        console.log(s.substring(idx - 100, idx + 600));
      }
    }
  });
});
