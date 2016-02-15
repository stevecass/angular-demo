angular.module('contacts').controller('ContactsController', ['Person', '$scope', '$filter',
  function(Person, $scope, $filter) {

  Person.all().then(function(response) {
    $scope.contacts = response;
  });

  $scope.nameFilter = $filter('nameFilter');

  $scope.showContact = function(contact) {
    $scope.currentContact = contact;
  };

}]);