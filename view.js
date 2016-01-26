function View() {
  this.setupHandlers();
  var ctSource   = $("#contact-template").html();
  this.ctTemplateFn = Handlebars.compile(ctSource);
  var lSource = $('#contact-list-template').html();
  this.listTemplateFn = Handlebars.compile(lSource);

}

View.prototype.handleClick = function(event) {
  var targetContact = event.target.dataset.id;
  this.controller.show(targetContact);
}

View.prototype.showOneContact = function(contact) {
  console.log(contact);
  console.log(contact.fullName());
  var output = this.ctTemplateFn(contact);
  $('#contact-detail').html(output);
}

View.prototype.setupHandlers = function() {
  var view = this;
  $('#contact-list').on('click', 'li', function(event){
    view.handleClick(event);
  });
}

View.prototype.showContactList = function(contacts) {
  var output = this.listTemplateFn({contacts: contacts});
  $('#contact-list').html(output);
}