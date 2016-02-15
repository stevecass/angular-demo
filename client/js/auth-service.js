angular.module('contacts').factory('AuthService', function(Session, $http) {
  var authService = {};
  var baseURI = 'http://localhost:3030';

  authService.logout = function() {
    return $http.post(baseURI + '/logout')
    .then(function(response) {
      Session.destroy();
    });
  };

  authService.login = function(credentials) {
    console.log('Logging in', credentials);
    return $http.post(baseURI + '/login', credentials)
      .then(function(response) {
        console.log(response);
        if (response.data.status === "OK") {
          console.log('creating local session');
          Session.create(response.data);
        }
      })
      .catch(function(response) {
        console.log('caught', response);
      });
  };

  authService.getCurrentUser = function() {
    return $http.get(baseURI + '/whoami')
    .then(function(response) {
      console.log(response)
      if (response.data.status === "OK") {
        Session.create(response.data);
      } else {
        Session.destroy();
      }
    }.bind(this))
    .catch(function(response) {
      console.log('caught', response);
    });
    ;
  };

  return authService;
});