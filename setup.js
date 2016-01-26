$(document).ready(function(){
  var model = new ContactList();
  var view = new View();
  var controller = new Controller(view, model);
  view.controller = controller;
  controller.index();
});