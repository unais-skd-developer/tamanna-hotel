import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('scripts/pages/wedding-party-venues.html', 'utf8');
const $ = cheerio.load(html);

console.log('Title:', $('title').text());

// Let's inspect hero section
const hero = $('section.elementor-top-section').first();
console.log('Hero classes / styles:');
$('section').slice(0, 3).each((i, el) => {
  console.log(`Section ${i}:`, $(el).attr('class'), $(el).attr('style'));
  const bgImg = $(el).css('background-image') || $(el).find('[data-settings*="background"]').attr('data-settings');
  if (bgImg) console.log('  bg:', bgImg);
  const heading = $(el).find('h1, h2, .elementor-heading-title').text().trim().replace(/\s+/g, ' ');
  if (heading) console.log('  heading:', heading);
});

// Let's inspect the cards
console.log('\n--- Searching for Cards ---');
const cards = [];
$('div.elementor-widget-wrap').each((i, el) => {
  // Let's look for headings inside
  const h2 = $(el).find('h2.elementor-heading-title, h3.elementor-heading-title').first().text().trim();
  if (h2) {
    // Check if it looks like a venue card
  }
});

// Let's find all images and titles in elements structured like hotel/restaurant cards
$('section, .elementor-container, .elementor-row').each((i, el) => {
  const titles = $(el).find('.elementor-heading-title').map((_, h) => $(h).text().trim()).get();
  const btns = $(el).find('.elementor-button-text').map((_, b) => $(b).text().trim()).get();
  if (btns.includes('ENQUIRE NOW') || btns.includes('VIEW MORE')) {
    console.log('\nFound Venue Card Container:');
    console.log('Titles:', titles);
    console.log('Buttons:', btns);
    const img = $(el).find('img').map((_, im) => $(im).attr('src') || $(im).attr('data-src')).get();
    console.log('Images:', img);
  }
});

