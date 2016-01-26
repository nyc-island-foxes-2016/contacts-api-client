function Contact(json) {
   Object.assign(this, json);
   return this;
}

Contact.prototype.fullName = function() {
  console.log(' in full name', this);
  return this.name.first + ' ' + this.name.last;
}

function ContactList() {

}

ContactList.loadContacts = function() {
  return $.get('http://localhost:3000/people');
}

ContactList.loadOne = function(id) {
  return $.get('http://localhost:3000/people/' + id)
  .then(function(response){
    return new Contact(response)
  });
}

