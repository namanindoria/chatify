const fs = require('fs');
const path = require('path');

const src = path.join(process.cwd(), 'frontend', 'chatify', 'dist');
const dest = path.join(process.cwd(), 'dist');

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    const stat = fs.statSync(srcFile);
    if (stat.isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

try {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  copyDir(src, dest);
  console.log('Successfully copied dist folder to root!');
} catch (err) {
  console.error('Error copying dist folder:', err);
  process.exit(1);
}
