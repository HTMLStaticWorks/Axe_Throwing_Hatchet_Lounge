const fs = require('fs');
const path = require('path');
const dir = 'c:\\class\\.vscode\\axe_throughing';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
files.forEach(file => {
    let p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/class="btn btn-primary w-100" type="submit" style="max-width: 150px;"/g, 'class="btn btn-primary w-100 footer-btn" type="submit"');
    fs.writeFileSync(p, content);
});
console.log('Fixed button inline styles.');
