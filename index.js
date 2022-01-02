require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { StaticApp } = require('@keystonejs/app-static');
const { createList } = require('./models/models');
const { PROJECT_NAME } = require('./app.constants');

const adapterConfig = {
    mongoUri: process.env.MONGO_URI,
};

const keystone = new Keystone({
    adapter: new Adapter(adapterConfig),
    cookieSecret: process.env.COOKIE_SECRET,
});

createList(keystone);

module.exports = {
    keystone,
    apps: [
        new StaticApp({
            path: '/assets/uploads',
            src: 'assets/uploads',
            fallback: 'index.html',
        }),
        new GraphQLApp(),
        new AdminUIApp({
            name: PROJECT_NAME,
            enableDefaultRoute: true,
            isAccessAllowed: true,
        }),
    ],
};
