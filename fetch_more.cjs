const https = require('https');
const fs = require('fs');

https.get('https://archive.org/metadata/illuminati_card_game', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const parsed = JSON.parse(data);
    const files = parsed.files.filter(f => f.name.endsWith('.jpg') || f.name.endsWith('.png')).map(f => f.name);
    fs.writeFileSync('files.txt', files.join('\n'));
    console.log(`Saved ${files.length} files.`);
  });
});
