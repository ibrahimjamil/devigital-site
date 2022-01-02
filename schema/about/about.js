const { Text, File } = require('@keystonejs/fields');
const { fileAdapter } = require('../../utils/utils');

const about = {
    fields: {
        title: {
            type: Text,
            isRequired: true,
        },
        image: {
            type: File,
            adapter: fileAdapter,
            mimetype: '.jpeg, .jpg, .gif, .svg, .png',
        },
        description: {
            type: Text,
            isMultiline: true,
            isRequired: true,
        },
    },
};

module.exports = about;
