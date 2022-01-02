const { Text, Relationship } = require('@keystonejs/fields');

const caseStudyDetailSchema = {
    fields: {
        sectionName: {
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
        },
        caseStudyImages: {
            type: Relationship,
            ref: 'caseStudyImage',
            many: true,
        },
        caseStudy: {
            type: Relationship,
            ref: 'caseStudy',
            many: false,
        },
    },
};

module.exports = caseStudyDetailSchema;
