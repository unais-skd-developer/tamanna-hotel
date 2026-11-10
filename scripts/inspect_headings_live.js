const https = require('https');

https.get('https://tamannahotels.com/top-banquet-hall-hinjawadi-pune/', (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const regex = /premium\s+facilities/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      console.log('--- FOUND AT INDEX', match.index, '---');
      console.log(html.slice(Math.max(0, match.index - 400), match.index + 400));
    }

    console.log('\n--- SEARCHING FOR OUR GALLERY ---');
    const regex2 = /our\s+gallery/gi;
    while ((match = regex2.exec(html)) !== null) {
      console.log('--- FOUND AT INDEX', match.index, '---');
      console.log(html.slice(Math.max(0, match.index - 400), match.index + 400));
    }
  });
});

