const { Text } = require('@keystonejs/fields');

const clientSchema = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        description: {
            type: Text,
            isMultiline: true,
            isRequired: true,
        },
    },
};

module.exports = clientSchema;
