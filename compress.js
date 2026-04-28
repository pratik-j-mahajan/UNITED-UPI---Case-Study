import sharp from 'sharp';
import fs from 'fs';

const inputPath = './public/UNITED UPI - UX Case Study.jpg';

async function sliceAndCompress() {
  console.log('Starting slicing and compression...');
  
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);
    
    const CHUNK_HEIGHT = 4000;
    const numChunks = Math.ceil(metadata.height / CHUNK_HEIGHT);
    
    console.log(`Slicing into ${numChunks} chunks...`);
    
    for (let i = 0; i < numChunks; i++) {
      const top = i * CHUNK_HEIGHT;
      const currentHeight = Math.min(CHUNK_HEIGHT, metadata.height - top);
      
      const outputPath = `./public/case-study-part-${i + 1}.webp`;
      
      await sharp(inputPath)
        .extract({ left: 0, top, width: metadata.width, height: currentHeight })
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      console.log(`Saved ${outputPath}`);
    }
    
    console.log('All done! You can now load these smaller pieces progressively.');
  } catch (err) {
    console.error('Error:', err);
  }
}

sliceAndCompress();
