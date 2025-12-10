const fs=require('fs');
const lines=fs.readFileSync('data/nofx_2025-12-10.log','utf8').trim().split(/\r?\n/);
const tail=lines.slice(-80);
console.log(tail.join('\\n'));
