import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

function findSnippet(phrase) {
  const re = new RegExp(phrase, 'i');
  const match = re.exec(html);
  if (match) {
    console.log(`\n=== Found '${phrase}' at ${match.index} ===`);
    console.log(html.slice(Math.max(0, match.index - 100), Math.min(html.length, match.index + 300)));
  } else {
    console.log(`\n=== NOT FOUND: '${phrase}' ===`);
  }
}

findSnippet('Book Your');
findSnippet('STYLE');
findSnippet('Gallery');
findSnippet('They say');
findSnippet('Premier');
findSnippet('Bizz');
findSnippet('Shree Inn');
findSnippet('Executive');
findSnippet('Imperial');
findSnippet('Daily Baker');
findSnippet('video');
findSnippet('banner');
findSnippet('slider');

