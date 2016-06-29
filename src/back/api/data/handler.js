'use strict';

const gql = require('../lib/graphql');

module.exports = (event, context, cb) => {
  gql(event.query)
    .then((response) => cb(null, response))
    .catch((error) => cb(error));
};

