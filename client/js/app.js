angular.module('contacts', []);

angular.module('contacts').controller('ContactsController', ['$scope', function($scope) {
  $scope.contacts = CANNED_PEOPLE;

  $scope.showContact = function(contact) {
    $scope.currentContact = contact;
  }

}]);