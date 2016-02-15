angular.module('contacts').service('Session', function ($rootScope) {

  this.create = function (userData) {
    this.userData = userData;
    $rootScope.$broadcast('userUpdated', userData);
  };

  this.destroy = function () {
    this.userData = null;
    $rootScope.$broadcast('userUpdated', null);
  };
});