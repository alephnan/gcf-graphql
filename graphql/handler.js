module.exports.handler = function(event, context) {

    graphqlGET(event, function(error, response) {
	    return context.done(error, response);
    });
};
