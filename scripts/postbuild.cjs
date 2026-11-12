const fs = require('fs');
const path = require('path');

const distHtmlPath = path.resolve(__dirname, '../dist/index.html');
if (!fs.existsSync(distHtmlPath)) {
  console.error('dist/index.html not found');
  process.exit(1);
}

let html = fs.readFileSync(distHtmlPath, 'utf8');

// 1. Remove any file protocol redirect script from dist/index.html
html = html.replace(/<script>[\s\S]*?window\.location\.replace[\s\S]*?<\/script>/i, '');

// 2. Find the module script
const scriptMatch = html.match(/<script type="module"[^>]*>([\s\S]*?)<\/script>/i);
if (scriptMatch) {
  // Remove module script from head
  html = html.replace(scriptMatch[0], '');
  
  // Wrap code safely
  const scriptContent = scriptMatch[1];
  const nonModuleScript = `<script>\n${scriptContent}\n</script>`;
  
  // NEVER use string replacement with code containing '$', because String.prototype.replace() interprets '$$' and '$&'!
  // Use function replacer or split/join:
  const bodyEndIndex = html.lastIndexOf('</body>');
  if (bodyEndIndex !== -1) {
    html = html.slice(0, bodyEndIndex) + nonModuleScript + '\n' + html.slice(bodyEndIndex);
  } else {
    html = html + '\n' + nonModuleScript;
  }
  
  fs.writeFileSync(distHtmlPath, html, 'utf8');
  console.log('✅ dist/index.html successfully transformed without string corruption!');
} else {
  console.log('ℹ️ No module script tag found.');
}

// 3. Also copy this standalone runnable file to the root directory as "소개페이지.html" and "view.html"
const rootStandalonePath = path.resolve(__dirname, '../소개페이지.html');
fs.writeFileSync(rootStandalonePath, html, 'utf8');
console.log('✅ Created root standalone file: 소개페이지.html');

const rootStandalonePath2 = path.resolve(__dirname, '../view.html');
fs.writeFileSync(rootStandalonePath2, html, 'utf8');
console.log('✅ Created root standalone file: view.html');
