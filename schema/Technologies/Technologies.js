const { Text, File } = require('@keystonejs/fields');
const { fileAdapter } = require('../../utils/utils');

const TechnologySchema = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        icon: {
            type: File,
            adapter: fileAdapter,
            mimetype: '.jpeg, .jpg, .gif, .svg, .png',
        },
    },
};

module.exports = TechnologySchema;
