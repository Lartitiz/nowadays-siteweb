import { readFileSync, writeFileSync } from 'fs';
import * as cheerio from 'cheerio';
const html = readFileSync('/tmp/accompagnement.html', 'utf8');
const $ = cheerio.load(html);
const imgs = [];
$('img').each((_, el) => {
  const src = $(el).attr('data-src') || $(el).attr('src') || '';
  const alt = $(el).attr('alt') || '';
  const cls = $(el).attr('class') || '';
  if (src.startsWith('http')) imgs.push({ src, alt, cls });
});
writeFileSync('/tmp/imgs.json', JSON.stringify(imgs, null, 2));
console.log('total imgs:', imgs.length);
imgs.forEach((i, idx) => console.log(idx, i.alt.slice(0,60), '|', i.src.slice(0, 100)));
