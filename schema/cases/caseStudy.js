const { Text, File } = require('@keystonejs/fields');
const { fileAdapter } = require('../../utils/utils');

const caseStudySchema = {
    fields: {
        jobField: {
            type: Text,
        },
        clientName: {
            type: Text,
            isRequired: true,
        },
        title: {
            type: Text,
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
    },
};

module.exports = caseStudySchema;
