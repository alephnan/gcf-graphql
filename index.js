import Schema from './data/index';
import { graphql }  from 'graphql';

exports.graphqlGET = function graphqlGET (options, context) {
  (async () => {
    var result = await (graphql(Schema, options.query));
    context.succeed(result);
  })();
}
