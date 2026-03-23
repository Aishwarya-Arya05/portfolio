const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Change colors
            content = content.replace(/indigo/g, 'teal');
            content = content.replace(/purple/g, 'rose');
            // Pink is in body.js
            content = content.replace(/pink/g, 'fuchsia');
            fs.writeFileSync(fullPath, content);
        }
    }
}

processDirectory(srcDir);
console.log('Replaced colors in JS files.');

// Now fix index.css
const cssPath = path.join(srcDir, 'index.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    css = css.replace(/#09090f/g, '#020617'); // darker slate
    // Replace glow rgba values
    css = css.replace(/99,102,241/g, '20,184,166'); // teal
    css = css.replace(/168,85,247/g, '244,63,94'); // rose
    
    // Light mode values changes
    css = css.replace(/#f0f2ff/g, '#f0fdfa'); // light teal tint
    css = css.replace(/#1e1b4b/g, '#042f2e'); 
    
    fs.writeFileSync(cssPath, css);
    console.log('Replaced colors in index.css.');
}
