const { Text } = require('@keystonejs/fields');

const companyJobsSchema = {
    fields: {
        jobTitle: {
            type: Text,
            isRequired: true,
        },
        shortDescription: {
            type: Text,
            isRequired: true,
        },
        longDescription: {
            type: Text,
            isMultiline: true,
            isRequired: true,
        },
        requiredSkills: {
            type: Text,
            isMultiline: true,
            isRequired: true,
        },
        niceToHave: {
            type: Text,
            isMultiline: true,
        },
    },
};

module.exports = companyJobsSchema;
