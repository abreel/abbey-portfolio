import fs from 'fs-extra';
import path from 'path';

const projectsDir = path.join(process.cwd(), 'projects');
const publicDir = path.join(process.cwd(), 'public', 'projects');

export async function copyAllImages() {
    const folders = fs.readdirSync(projectsDir);

    for (const folder of folders) {
        const src = path.join(projectsDir, folder, 'images');
        const dest = path.join(publicDir, folder, 'images');

        if (fs.existsSync(src)) {
            await fs.ensureDir(dest);
            await fs.copy(src, dest);
            console.log(`✅ Copied images for ${folder}`);
        }
    }
}
