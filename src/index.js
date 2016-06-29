'use strict';

import Schema from './back/api/lib/graphql/';
//import { graphQL }  from 'graphql';

function handleGET(req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.send('Hello World');
}

function handlePUT(req, res) {
  res.writeHead();
  //let result = await (graphQL(Schema, req.query));
  //res.send(result);
}

export function helloGQL (req, res) {
  switch(req.method) {
    case 'GET':
      handleGET(req, res)
      break;
    case 'PUT':
      handlePUT(req, res)
      break;
  }
}

/*
(async () => {
    var result = await (graphql(Schema, req.query));
    res.send(result);
  })();
*/
