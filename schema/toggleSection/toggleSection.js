const { Checkbox, Select } = require('@keystonejs/fields');

const toggleSectionSchema = {
    fields: {
        sectionName: {
            type: Select,
            options: [
                'user',
                'caseStudy',
                'caseStudyDetail',
                'caseStudyImage',
                'service',
                'client',
                'homePageSection',
                'siteBlog',
                'job',
                'blogImage',
                'about',
                'technology',
                'partner',
            ],
            isRequired: true,
            isUnique: true,
        },
        doShowSections: {
            type: Checkbox,
            isRequired: true,
        },
    },
};

module.exports = toggleSectionSchema;
