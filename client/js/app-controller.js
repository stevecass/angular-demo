angular.module('contacts').controller('AppController', ['AuthService', '$scope', function(AuthService, $scope) {

  $scope.$on('userUpdated', function(event, data) {
    $scope.currentUser = data;
  });

  AuthService.getCurrentUser();

  $scope.logout = function () {
    AuthService.logout();
  };

  $scope.loginForm = {};

  $scope.logUserIn = function() {
    var credentials = {
      username: $scope.loginForm.username,
      password: $scope.loginForm.password
    };
    AuthService.login(credentials)
    .then(function() {
      $scope.loginForm = {};
    });
  };
}]);
