import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/assets/images';
//const inputDir = './public';

const outputDir = './src/assets/images/optimized';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;
  sharp(path.join(inputDir, file))
    .resize({ width: 1000 }) // 최대 1000px로 리사이즈
    .toFormat('webp')
    .webp({ quality: 80 })
    .toFile(path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
    .then(() => console.log('Optimized:', file));
}); 