const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
    src: 'assets/uploads',
    path: '/assets/uploads',
    getFilename: (options) => options.originalFilename,
});

module.exports = {
    fileAdapter,
};
