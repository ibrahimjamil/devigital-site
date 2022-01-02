const { Text, Relationship } = require('@keystonejs/fields');

const blogsSchema = {
    fields: {
        blogName: {
            type: Text,
            isRequired: true,
        },
        title: {
            type: Text,
            isRequired: true,
        },
        description: {
            type: Text,
            isMultiline: true,
            isRequired: true,
        },
        blogImages: {
            type: Relationship,
            ref: 'blogImage',
            many: true,
        },
    },
};

module.exports = blogsSchema;
