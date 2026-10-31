import fs from 'fs';

const html = fs.readFileSync('scripts/header.html', 'utf-8');

// Find all elements with classes and text
const sections = [...html.matchAll(/<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*e-con-boxed[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
console.log('Sections inside header:', sections.length);

// Let's find menus and buttons
const navs = [...html.matchAll(/<nav[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/nav>/gi)];
console.log('Navs count:', navs.length);
navs.forEach((n, idx) => {
  console.log(`\n--- NAV ${idx + 1} (class: ${n[1]}) ---`);
  const items = [...n[2].matchAll(/<li[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/li>/gi)];
  items.forEach(it => {
    const text = it[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`  • ${text}`);
  });
});

// Let's find buttons in header
const buttons = [...html.matchAll(/<a[^>]*class=["'][^"']*elementor-button[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)];
console.log('\n--- BUTTONS IN HEADER ---');
buttons.forEach(b => console.log('Button:', b[1].replace(/<[^>]+>/g, '').trim()));
