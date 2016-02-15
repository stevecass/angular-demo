angular.module('contacts').controller('ContactsController', ['Person', '$scope', '$filter',
  function(Person, $scope, $filter) {

  Person.all().then(function(response) {
    $scope.contacts = response;
  });

  $scope.newContact = new Person();
  $scope.nameFilter = $filter('nameFilter');

  $scope.showForm = function() {
    console.log('Form vis');
    $scope.formVisible = true;
  }

  $scope.showContact = function(contact) {
    $scope.formVisible = false;
    $scope.currentContact = contact;
  };

  $scope.saveNewContact = function() {
    var p = new Person($scope.newContact);
    p.$save().then(function(response){
      $scope.contacts.push(response);
      $scope.formVisible = false;
    });
  }

}]);