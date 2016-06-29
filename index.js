'use strict';

import Schema from './back/api/lib/graphql/';
import { graphql }  from 'graphql';

exports.graphqlGET = function graphqlGET (req, res) {
  (async () => {
    var result = await (graphql(Schema, req.query));
    res.send(result);
  })();
}
