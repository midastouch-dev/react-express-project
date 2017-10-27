let Fetch = require('whatwg-fetch');
let serverUrl = "http://localhost:6069";

let services = {

  get: function(url){
    return fetch(serverUrl + url)
    .then(function(response){
      return response.json();
    });
  },

  post: function(url, todo){
    let todoObj = {
      text: todo,
      id: Math.floor(Date.now()/1000)+todo
    };
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post",
      body: JSON.stringify(todoObj)
    };
    return fetch(serverUrl + url, options)
    .then(function(response){
      return response;
    });
  }
}

module.exports = services;
