angular.module('contacts').factory('Person', function($resource) {

  var apiUrl = 'http://localhost:3030/people/:id';
  var Person = $resource(apiUrl, { id: '@id' }, {
    create: {
      method: 'POST'
    },
    update: {
      method: 'PATCH'
    }
  });

  Person.prototype.getFullName = function() {
     var result = '';
     if (this.name.first) {
       result += this.name.first;
     }
     result += ' ';
     if (this.name.last) {
       result += this.name.last;
     }
     return result.trim();
  }

  Person.all = function() {
    return Person.query().$promise;
  };

  Person.find = function(id) {
    return Person.get({id: id}).$promise;
  }

  Person.prototype.save = function() {
    if (this.id) {
      console.log('updating');
      return this.$update();
    } else {
      console.log('creating');
      return this.$save();
    }
  }

  return Person;
});