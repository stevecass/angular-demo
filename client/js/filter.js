angular.module('contacts').filter('nameFilter', function () {
  return function (items, valueToMatch) {
    if (!( valueToMatch && valueToMatch.length) ) {
      return items;
    } else {
      return items.filter(function(person){
        return person.getFullName().toLowerCase().indexOf(valueToMatch) > -1;
      });
    }
  };
});