const fs = require('fs');
const path = require('path');

const dir = 'c:\\class\\.vscode\\axe_throughing';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/<form class="input-group">[\s\S]*?<input type="email" class="form-control([^"]*)" placeholder="Email Address">[\s\S]*?<button class="btn btn-primary" type="submit">Join<\/button>[\s\S]*?<\/form>/g, 
        `<form class="d-flex flex-column flex-sm-row gap-2">
                        <input type="email" class="form-control$1 w-100" placeholder="Email Address">
                        <button class="btn btn-primary w-100" type="submit" style="max-width: 150px;">Join</button>
                    </form>`);

    fs.writeFileSync(filePath, content);
});

console.log('Footers updated.');
