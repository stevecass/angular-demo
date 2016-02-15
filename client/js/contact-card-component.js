angular.module('contacts').directive('contactCard', function() {
  return {
    scope: {},
    bindToController: {
      contact: '='
    },
    controller: function() { },
    controllerAs: 'ccard',
    template: '   <div id="contact-card"> ' +
'     <div class="card-header"> ' +
'      <img ng-src="{{ccard.contact.avatar}}" alt="{{ccard.contact.name.first}} {{ccard.contact.name.last}}"> ' +
'      <h2>{{ccard.contact.name.first}} {{ccard.contact.name.last}}</h2> ' +
'      </div> ' +
'    <div> ' +
'      <div id="card-detail"> ' +
'         <div id="address-phone"> ' +
'           <p>email: {{ccard.contact.email}}</p> ' +
'           <p>address: {{ccard.contact.address.streetAddress}} ' +
'           {{ccard.contact.address.city}} ' +
'           {{ccard.contact.address.state}} {{ccard.contact.address.zipCode}}</p> ' +
'           <p>phone:{{ccard.contact.phone}}</p> ' +
'         </div> ' +
'         <div id="bio"> ' +
'           {{ccard.contact.bio}} ' +
'         </div> ' +
'      </div> ' +
'    </div> ' +
'   </div> ' +
' </div> '
  };
});