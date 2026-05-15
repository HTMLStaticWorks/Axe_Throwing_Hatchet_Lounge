const fs = require('fs');
const path = require('path');

const dir = 'c:\\class\\.vscode\\axe_throughing';

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

if (!htmlFiles.includes('register.html') && htmlFiles.includes('login.html')) {
    fs.copyFileSync(path.join(dir, 'login.html'), path.join(dir, 'register.html'));
    htmlFiles.push('register.html');
}

const faviconTag = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-axe'><path d='m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9'/><path d='M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z'/></svg>">`;

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Branding updates
    content = content.replace(/Ironwood Hatchet Lounge/gi, 'Axe Throwing & Hatchet Lounge');
    content = content.replace(/IRONWOOD <span class="text-highlight">HATCHET<\/span>/g, 'AXE THROWING & <span class="text-highlight">HATCHET LOUNGE</span>');
    content = content.replace(/#Ironwood<span class="text-highlight">Lounge<\/span>/g, '#AxeThrowing<span class="text-highlight">Lounge</span>');

    // Theme update
    content = content.replace(/data-bs-theme="dark"/g, 'data-bs-theme="light"');

    // Favicon injection
    if (!content.includes('rel="icon"')) {
        content = content.replace(/<\/head>/i, `    ${faviconTag}\n</head>`);
    }

    fs.writeFileSync(filePath, content);
});

console.log('Bulk update completed.');
