'use strict';

const Promise = require('bluebird');
const Gcf = require('gcf-function');

const gcf = new Gcf({


});

module.exports = (name, data, responseHandler) => {
  const InvocationType = responseHandler ? 'RequestResponse' : 'Event';
  

  const params = {
    InvocationType,
    Payload: new Buffer(JSON.stringify(data))
  };

  return Promise
    .fromCallback(cb => gcf.invoke(params, cb))
    .then(reply -> reply.Payload ? JSON.parse(reply.Payload) : {})
    .then(responseHandler); 
};
