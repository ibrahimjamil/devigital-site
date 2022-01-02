const { File } = require('@keystonejs/fields');
const { fileAdapter } = require('../../utils/utils');

const blogImageSchema = {
    fields: {
        image: {
            type: File,
            adapter: fileAdapter,
            isRequired: true,
            mimetype: '.jpeg, .jpg, .gif, .svg, .png',
        },
    },
};

module.exports = blogImageSchema;
