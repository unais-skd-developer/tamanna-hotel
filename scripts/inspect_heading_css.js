const https = require('https');

https.get('https://tamannahotels.com/top-banquet-hall-hinjawadi-pune/', (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const pos = 280940;
    const slice = html.slice(pos - 1000, pos);
    const dataIdMatch = slice.match(/data-id="([^"]+)"/g);
    console.log('Data IDs before heading:', dataIdMatch);

    if (dataIdMatch) {
      dataIdMatch.forEach(m => {
        const id = m.split('"')[1];
        const cssPos = html.indexOf(id + ' .elementskit-section-title');
        if (cssPos !== -1) {
          console.log(`CSS for ${id}:`, html.slice(cssPos, cssPos + 300));
        }
      });
    }

    // Also look for Our Gallery
    const galPos = html.indexOf('Our <span>Gallery</span>');
    if (galPos === -1) {
      const galPos2 = html.indexOf('Gallery</span>');
      console.log('Gallery around:', html.slice(galPos2 - 100, galPos2 + 100));
    }
  });
});

