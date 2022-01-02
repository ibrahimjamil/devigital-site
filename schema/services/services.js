const { Text, File } = require('@keystonejs/fields');
const { fileAdapter } = require('../../utils/utils');

const servicesSchema = {
    fields: {
        title: {
            type: Text,
            isRequired: true,
        },
        description: {
            type: Text,
            isMultiline: true,
            isRequired: true,
        },
        image: {
            type: File,
            adapter: fileAdapter,
            mimetype: '.jpeg, .jpg, .gif, .svg, .png',
        },
        icon: {
            type: File,
            adapter: fileAdapter,
            mimetype: '.jpeg, .jpg, .gif, .svg, .png',
        },
    },
};

module.exports = servicesSchema;
