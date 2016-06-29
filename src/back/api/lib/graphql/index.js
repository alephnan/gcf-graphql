'use strict';

const graphql = require('graphql').graphql;
const Schema = require('./schema');

module.exports = (query) => {

  return graphql(Schema, query);

};
