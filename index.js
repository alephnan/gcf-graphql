import Schema from './data/index';
import { graphql }  from 'graphql';

exports.graphqlGET = function graphqlGET (req, res) {
  (async () => {
    var result = await (graphql(Schema, req.query));
    res.send(result);
  })();
}
