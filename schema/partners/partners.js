const { Text } = require('@keystonejs/fields');

const partnersSchema = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        description: {
            type: Text,
            isRequired: true,
            isMultiline: true,
        },
    },
};

module.exports = partnersSchema;
