function Controller(view, contactList) {
  this.view = view;
  this.contactList = contactList;
}

Controller.prototype.show = function(id) {
  var contact = ContactList.loadOne(id);
  var ctrl = this;
  contact.then(function(contact){
  console.log('contact in ctrl', contact);
    ctrl.view.showOneContact(contact);
  });
}

Controller.prototype.index = function() {
  
  //Ask model for array of contacts
  var deferredArray = ContactList.loadContacts();
  var ctrl = this;

  //Ask view to show the array when it's filled in
  deferredArray.then(function(arr){
    ctrl.view.showContactList(arr);
  });

}