import { copyAllImages } from '../lib/copyProjectAssets.js';
import chokidar from 'chokidar';
import path from 'path';

copyAllImages(); // Initial copy when dev starts

const projectsDir = path.join(process.cwd(), 'projects');

function watchImages() {
    const watcher = chokidar.watch(path.join(projectsDir, '*/images/**/*'), {
        ignoreInitial: true,
        persistent: true,
    });

    watcher
        .on('add', copyAllImages)
        .on('change', copyAllImages)
        .on('unlink', copyAllImages);

    console.log('🔍 Watching project images for changes...');
}

watchImages();
