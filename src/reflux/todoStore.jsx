var Services = require('../services/services.js');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

/*
  Stored data:
    todos
*/
var TodoStore = Reflux.createStore({
  // similar to bind fluxxor
  listenables: [Actions],
  // same names of actions
  getTodos: function(){
    Services.get('/todos')
    .then(function(json){
      this.todos = json;
      this.fireUpdate();
     }.bind(this));
  },
  postTodo: function(text){
    // post todo to server
    // got a succesful callback
    // update local list
    if(!this.todos){
      this.todos = [];
    }
    Services.post('/todos', text)
    .then(function(){
      this.getTodos();
    }.bind(this));
  },

  fireUpdate: function(){
    this.trigger('change', this.todos);
  }

});

module.exports = TodoStore;
