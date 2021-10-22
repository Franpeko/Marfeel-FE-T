const path = require('path');

module.exports = {
    entry: './FrontEnd/src/index.html',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'none',
}