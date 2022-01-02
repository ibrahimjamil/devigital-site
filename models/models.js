const { allSchemas } = require('../models/schemas');

const createList = (keystone) => {
    allSchemas.forEach((schema) => {
        keystone.createList(schema.modelName, {
            fields: schema.schemaName.fields,
            access: {
                read: true,
                create: true,
                update: true,
                delete: true,
            },
        });
    });
};

module.exports = {
    createList,
};
