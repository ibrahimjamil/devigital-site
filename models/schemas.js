const userSchema = require('../schema/user');
const caseStudySchema = require('../schema/cases/caseStudy');
const caseStudyDetailSchema = require('../schema/cases/caseStudyDetail');
const caseStudyImageSchema = require('../schema/cases/caseStudyImage');
const servicesSchema = require('../schema/services/services');
const clientSchema = require('../schema/clients/clients');
const homePageSectionSchema = require('../schema/homePageSection/homePageSection');
const blogsSchema = require('../schema/blogs/blogs');
const blogImageSchema = require('../schema/blogs/blogImage');
const jobsSchema = require('../schema/jobs/jobs');
const aboutSchema = require('../schema/about/about');
const technologySchema = require('../schema/Technologies/Technologies');
const partnersSchema = require('../schema/partners/partners');
const toggleSectionSchema = require('../schema/toggleSection/toggleSection');

const allSchemas = [
    {
        modelName: 'user',
        schemaName: userSchema,
    },
    {
        modelName: 'caseStudy',
        schemaName: caseStudySchema,
    },
    {
        modelName: 'caseStudyDetail',
        schemaName: caseStudyDetailSchema,
    },
    {
        modelName: 'caseStudyImage',
        schemaName: caseStudyImageSchema,
    },
    {
        modelName: 'service',
        schemaName: servicesSchema,
    },
    {
        modelName: 'client',
        schemaName: clientSchema,
    },
    {
        modelName: 'homePageSection',
        schemaName: homePageSectionSchema,
    },
    {
        modelName: 'siteBlog',
        schemaName: blogsSchema,
    },
    {
        modelName: 'job',
        schemaName: jobsSchema,
    },
    {
        modelName: 'blogImage',
        schemaName: blogImageSchema,
    },
    {
        modelName: 'about',
        schemaName: aboutSchema,
    },
    {
        modelName: 'technology',
        schemaName: technologySchema,
    },
    {
        modelName: 'partner',
        schemaName: partnersSchema,
    },
    {
        modelName: 'toggleSection',
        schemaName: toggleSectionSchema,
    },
];

module.exports = {
    allSchemas,
};
