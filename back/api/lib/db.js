'use strict';

const Promise = require('bluebird');

const config = {

};

const client = new ElasticDB.Client(config);

module.exports = (method, params) => {
  return Promise.fromCallback(cb => client[method](params, cb));
};
