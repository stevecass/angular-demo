angular.module('contacts').directive('contactList', function() {
  return {
    scope: {
      select: '=',
      nameFilter: '=',
    },
    bindToController: {
      contacts: '='
    },
    controller: function($scope) {
    },
    link: function(scope) {
    },
    controllerAs: 'ctrl',
    template: '  <div id="contact-list"> ' +
'   <input class="contact-filter" ng-model="ctrl.searchString">  ' +
'   <div ng-repeat="contact in ctrl.contacts | nameFilter: ctrl.searchString | orderBy: \'name.last\' track by $index "> ' +
'     <button class="contact-button" ' +
'       class="contact-summary" ' +
'       ng-click="select(contact)"> ' +
'       {{contact.name.last}}, {{contact.name.first}} ' +
'     </button> ' +
'   </div> ' +
'  </div> '
  };
});
