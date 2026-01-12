const fs = require('fs');
const path = require('path');

const baseDir = 'public/BSPORTY';
const dirs = fs.readdirSync(baseDir);

const products = [];

dirs.forEach(dir => {
    if (dir === '.DS_Store') return;
    const fullPath = path.join(baseDir, dir);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
        const files = fs.readdirSync(fullPath);
        // Try to find a 'front' image, otherwise take the first jpg
        const frontImg = files.find(f => f.toLowerCase().includes('front') && f.endsWith('.jpg')) || files.find(f => f.endsWith('.jpg'));
        if (frontImg) {
            // Cleaning up the name: BSBlanketBoxW -> Blanket Box W
            let cleanName = dir.replace(/^BS/, '');
            // Insert space before capital letters
            cleanName = cleanName.replace(/([A-Z])/g, ' $1').trim();

            products.push({
                id: dir,
                name: cleanName,
                description: "Exclusive B. Sporty Collection",
                image: `/BSPORTY/${dir}/${frontImg}`,
                price: 'Contact now to get'
            });
        }
    } else if (dir.endsWith('.jpg')) {
        let cleanName = dir.replace(/^BS/, '').replace('.jpg', '');
        cleanName = cleanName.replace(/([A-Z])/g, ' $1').trim();

        products.push({
            id: dir,
            name: cleanName,
            description: "Exclusive B. Sporty Collection",
            image: `/BSPORTY/${dir}`,
            price: 'Contact now to get'
        });
    }
});

console.log(JSON.stringify(products, null, 2));
