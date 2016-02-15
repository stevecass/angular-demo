angular.module('contacts').controller('ContactsController', ['Person', '$scope', function(Person, $scope) {

  Person.all().then(function(response) {
    $scope.contacts = response;
  });

  $scope.showContact = function(contact) {
    $scope.currentContact = contact;
  };

}]);