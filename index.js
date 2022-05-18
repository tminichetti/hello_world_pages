const fs = require('fs');

const createIndexFile = () => {
    !fs.existsSync('build') ? fs.mkdirSync('build') : fs.writeFileSync('build/index.html', 'Hello bonjour');
};

createIndexFile();

module.exports = createIndexFile;