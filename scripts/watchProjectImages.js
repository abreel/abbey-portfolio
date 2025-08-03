import chokidar from 'chokidar';
import path from 'path';
import { copyAllImagesAndGenerateMap } from '../lib/copyProjectAssets.js';

copyAllImagesAndGenerateMap(); // Initial copy when dev starts

const projectsDir = path.join(process.cwd(), 'projects');

function watchImages() {
  const watcher = chokidar.watch(path.join(projectsDir, '*/images/**/*'), {
    ignoreInitial: true,
    persistent: true,
  });

  watcher
    .on('add', copyAllImagesAndGenerateMap)
    .on('change', copyAllImagesAndGenerateMap)
    .on('unlink', copyAllImagesAndGenerateMap);

  console.log('🔍 Watching project images for changes...');
}

watchImages();
