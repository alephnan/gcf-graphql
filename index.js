import { graphql } from 'graphql';
import Schema from './schema';

exports.graphqlGET = function graphqlGET (req, res) {

  let query = req.query;

  graphql(Schema, query).then( function(result) {
      console.log('result: ', result);
      res.send(result);
  });  
  
};
