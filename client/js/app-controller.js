angular.module('contacts').controller('AppController', ['AuthService', 'Session', '$scope', function(AuthService, Session, $scope) {

  $scope.$on('userUpdated', function(event, data) {
    $scope.currentUser = data;
  });

  AuthService.getCurrentUser()
    .then(function(response) {
    });

  $scope.logout = function () {
    AuthService.logout()
    .then(function() {
      $scope.currentUser = Session.userData;
    });
  };

  $scope.loginForm = {};

  $scope.logUserIn = function() {
    var credentials = {
      username: $scope.loginForm.username,
      password: $scope.loginForm.password
    };
    AuthService.login(credentials)
    .then(function() {
      if (Session.userData) {
        $scope.loginForm = {};
      }
    });
  };
}]);
