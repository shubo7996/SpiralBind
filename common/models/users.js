'use strict';

module.exports = function(Users) {
	Users.remoteMethod(  
  'create',
  {
    http: {path: '/users', verb: 'post',status: 201}
  }
);

};