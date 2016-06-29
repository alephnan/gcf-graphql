'use strict';

const Promise = require('bluebird');
const Elasticsearch = require('elasticsearch');

const config = {

};

const client = new Elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

module.exports = (method, params) => {
  return Promise.fromCallback(cb => client[method](params, cb));
};
