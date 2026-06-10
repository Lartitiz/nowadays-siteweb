import { readFileSync, writeFileSync, mkdirSync } from 'fs';
const imgs = JSON.parse(readFileSync('/tmp/imgs.json','utf8'));
// projets accompagnes: indices 14..25 = 12 imgs for 11 projects
for (let i = 14; i <= 25; i++) console.log(i, imgs[i].alt.slice(0,80), imgs[i].src);
