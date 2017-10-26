let Fetch = require('whatwg-fetch');
let serverUrl = "http://localhost:6069";

let services = {
  get: function(url){
    return fetch(serverUrl + url)
    .then(function(response){
      return response.json();
    });
  }
}

module.exports = services;
