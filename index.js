const svgr = require('@svgr/core').default;
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const iconsSourceDir = path.join(__dirname, 'src/icons');
const iconsOutputDir = path.join(__dirname, 'dist/icons');

// Ensure the output directory exists
if (!fs.existsSync(iconsOutputDir)) {
  fs.mkdirSync(iconsOutputDir, { recursive: true });
}

// Convert SVG files to React components
const execute = () => glob(`${iconsSourceDir}/*.svg`, (err, files) => {
  if (err) {
    console.error('Error finding SVG files:', err);
    return;
  }

  files.forEach(file => {
    const svgCode = fs.readFileSync(file, 'utf8');
    svgr(svgCode, { icon: true }, { componentName: 'SvgIcon' })
      .then(jsCode => {
        const outputFilePath = path.join(iconsOutputDir, `${path.basename(file, '.svg')}.js`);
        fs.writeFileSync(outputFilePath, jsCode);
        console.log(`Icon generated: ${outputFilePath}`);
      })
      .catch(error => console.error('Error converting SVG to component:', error));
  });
});

export {
  execute
}
