var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/List.jsx');


let ingredientsData = [{id:1, ingredient:"Sugar"},{id:2, ingredient:"Salt"}, {id:3, ingredient:"Cheese"}];


ReactDom.render(<List items = {ingredientsData}/>, document.getElementById('app'));
