const fs = require('fs');
const path = require('path');

const vendorDir = path.join(__dirname, '..', 'vendor');
const nodeModules = path.join(__dirname, '..', 'node_modules');

function copy(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

try {
  copy(path.join(nodeModules, 'bootstrap', 'dist', 'css', 'bootstrap.min.css'), path.join(vendorDir, 'bootstrap', 'css', 'bootstrap.min.css'));
  copy(path.join(nodeModules, 'bootstrap', 'dist', 'js', 'bootstrap.bundle.min.js'), path.join(vendorDir, 'bootstrap', 'js', 'bootstrap.bundle.min.js'));
  copy(path.join(nodeModules, 'bootstrap-icons', 'font', 'bootstrap-icons.css'), path.join(vendorDir, 'bootstrap-icons', 'bootstrap-icons.css'));
  const fontsSrc = path.join(nodeModules, 'bootstrap-icons', 'font');
  const fontsDestDir = path.join(vendorDir, 'bootstrap-icons');
  fs.mkdirSync(fontsDestDir, { recursive: true });
  const files = fs.readdirSync(fontsSrc);
  files.forEach(f => {
    if (f.endsWith('.woff') || f.endsWith('.woff2')) {
      copy(path.join(fontsSrc, f), path.join(fontsDestDir, f));
    }
  });
  console.log('Vendor files copied to vendor/');
} catch (err) {
  console.error('Error copying vendor files:', err.message);
  process.exit(1);
}
