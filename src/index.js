'use strict';

function get(req, res) {
    var fileSystem = require('fs');
    var readStream = fileSystem.createReadStream('./src/graphiql.html');
    readStream.pipe(res);
}

function post(req, res) {
   var esGraphQL = require('elasticsearch-graphql')
   var graphql = require('graphql')
   var hitsSchema = require('./schema')
   var graphqlHTTP = require('express-graphql')

   var testSchema = esGraphQL({graphql: graphql, name: 'yourSchemaName', elastic: {host: 'localhost:9200',
                                                                        index: 'index',
                                                                        type: 'type'
                                                                      },
                                                                      hitsSchema: hitsSchema
                                                                    })

   var result = graphqlHTTP({ schema: new graphql.GraphQLSchema({
     query: new graphql.GraphQLObjectType({
     name: 'RootQueryType',
     fields: { ordersSearch: testSchema }})}),
     graphiql: true })

   res.send(result);
}

export function helloGQL (req, res) {
  switch(req.method) {
    case 'GET':
      get(req, res)
      break;
    case 'POST':
      post(req, res)
      break;
  }
}
