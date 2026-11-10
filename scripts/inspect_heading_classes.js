const https = require('https');

https.get('https://tamannahotels.com/top-banquet-hall-hinjawadi-pune/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search for headings: Premium Facilities, Our Gallery
    // Find class or style for 'Premium Facilities'
    const match1 = data.match(/<h[1-6][^>]*>[^<]*Premium Facilities[\s\S]*?<\/h[1-6]>/i);
    console.log('Heading HTML for Premium Facilities:', match1 ? match1[0] : 'not found');

    const match2 = data.match(/<h[1-6][^>]*>[^<]*Our Gallery[\s\S]*?<\/h[1-6]>/i);
    console.log('Heading HTML for Our Gallery:', match2 ? match2[0] : 'not found');

    // Find class or widget for the title and description of cards
    const match3 = data.match(/<div class="elementor-icon-box-wrapper"[\s\S]*?<\/div>\s*<\/div>/i);
    console.log('Card HTML:', match3 ? match3[0] : 'not found');
  });
});

