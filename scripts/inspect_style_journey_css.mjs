import fs from 'fs';

const html = fs.readFileSync('scripts/home.html', 'utf-8');

const m = html.match(/\.elementor-11\s+\.elementor-element\.(elementor-element-(?:53ded85|7e248fc|129c0f9|c8f6cdf|161a2a0|11600d9|c21a97b|92af8ef|0e13f10))[^{]*\{[^}]+\}/gi);
console.log(m);

