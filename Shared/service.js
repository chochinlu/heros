const CosmosClient = require('@azure/cosmos').CosmosClient;
const config = require('./config');

const endpoint = config.endpoint;
const masterKey = config.primaryKey;

const client = new CosmosClient({ endpoint, auth: { masterKey } });

const container = client
  .database(config.database.id)
  .container(config.container.id);

module.exports = container;
