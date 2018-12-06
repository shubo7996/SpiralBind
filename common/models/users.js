'use strict';

module.exports = function(Users) {
	Users.remoteMethod(  
		'users',
  {
    http: {path: '/users', verb: 'post', status: 201}
    //rest: {after: responseStatus(201)
    //accepts: [{limit: 5}, {http: 'query'}, {arg: 'First_name', type: 'string', http: { source: 'query' }, {order: 'age <DESC>'} http: {source: 'query'}],

 	//returns: {arg: 'response', type: 'string'}
  }
);

};

