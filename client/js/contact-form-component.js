angular.module('contacts').directive('contactForm', function() {
  return {
    scope: {
        save: '=',
        ct: '=ngModel'
    },
    bindToController: {
    },
    controller: function() { },
    controllerAs: 'ccard',
    template: '   <div id="contact-form"><h3>New contact details</h3> ' +
    '   <div> ' +
    '     <input placeholder="Given name" ng-model="ct.name.first">  ' +
    '     <input placeholder="Family name" ng-model="ct.name.last"> ' +
    '   </div> ' +
    '   <div> ' +
    '     <input placeholder="Username" ng-model="ct.username"> ' +
    '     <input placeholder="Email" ng-model="ct.email"> ' +
    '   </div> ' +
    '   <div> ' +
    '     <input placeholder="Company" ng-model="ct.company"> ' +
    '     <input placeholder="Avatar URL" ng-model="ct.avatar"> ' +
    '   </div> ' +
    '   <div> ' +
    '     <input placeholder="Street Address" ng-model="ct.address.streetAddress"> ' +
    '     <input placeholder="Houston" ng-model="ct.address.city"> ' +
    '   </div>' +
    '   <div>' +
    '     <input placeholder="NY" ng-model="ct.address.state"> ' +
    '     <input placeholder="90210" ng-model="ct.address.zipCode"> ' +
    '   </div> ' +
    '   <div> ' +
    '     <input placeholder="212 555 1212" ng-model="ct.phone"> ' +
    '   </div>' +
    '   <div>' +
    '     <textarea ng-model="ct.bio" placeholder="biography"></textarea> ' +
    '   </div> ' +
    '   <button ng-click="save()">Save</save> ' +
    '</div>'
  };
});


