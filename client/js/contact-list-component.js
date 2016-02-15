angular.module('contacts').directive('contactList', function() {
  return {
    scope: {
      select: '='
    },
    bindToController: {
      contacts: '='
    },
    controller: function() { },
    controllerAs: 'ctrl',
    template: '  <div id="contact-list"> ' +
'   <div ng-repeat="contact in ctrl.contacts | orderBy: \'name.last\' track by $index "> ' +
'     <button class="contact-button" ' +
'       class="contact-summary" ' +
'       ng-click="select(contact)"> ' +
'       {{contact.name.last}}, {{contact.name.first}} ' +
'     </button> ' +
'   </div> ' +
'  </div> '
  };
});
