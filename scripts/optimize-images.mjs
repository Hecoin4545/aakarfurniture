import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');

// Config
const MAX_WIDTH = 1920;       // Max width for large images
const JPEG_QUALITY = 75;      // Good balance between quality and size

async function optimizeImages() {
    const files = fs.readdirSync(ASSETS_DIR);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    console.log(`\n🖼️  Found ${imageFiles.length} images to optimize\n`);

    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of imageFiles) {
        const filePath = path.join(ASSETS_DIR, file);
        const stats = fs.statSync(filePath);
        const originalSize = stats.size;
        totalOriginal += originalSize;

        try {
            const image = sharp(filePath);
            const metadata = await image.metadata();

            // Build the pipeline
            let pipeline = sharp(filePath);

            // Resize if wider than MAX_WIDTH; keep aspect ratio
            if (metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize(MAX_WIDTH, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });
            }

            // Compress as JPEG
            pipeline = pipeline.jpeg({
                quality: JPEG_QUALITY,
                mozjpeg: true,        // Use mozjpeg for better compression
                chromaSubsampling: '4:2:0'
            });

            // Write to a temp file first, then replace
            const tempPath = filePath + '.tmp';
            await pipeline.toFile(tempPath);

            const newStats = fs.statSync(tempPath);
            const newSize = newStats.size;
            totalOptimized += newSize;

            // Replace original with optimized
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);

            const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
            const origMB = (originalSize / 1024 / 1024).toFixed(1);
            const newMB = (newSize / 1024 / 1024).toFixed(1);

            console.log(`  ✅ ${file}`);
            console.log(`     ${origMB} MB → ${newMB} MB  (${reduction}% smaller)`);
            console.log(`     ${metadata.width}x${metadata.height} → ${Math.min(metadata.width, MAX_WIDTH)}px wide\n`);
        } catch (err) {
            console.error(`  ❌ Error processing ${file}: ${err.message}\n`);
        }
    }

    const totalOrigMB = (totalOriginal / 1024 / 1024).toFixed(1);
    const totalNewMB = (totalOptimized / 1024 / 1024).toFixed(1);
    const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

    console.log(`\n${'═'.repeat(50)}`);
    console.log(`📊 TOTAL: ${totalOrigMB} MB → ${totalNewMB} MB  (${totalReduction}% smaller)`);
    console.log(`${'═'.repeat(50)}\n`);
}

optimizeImages();
