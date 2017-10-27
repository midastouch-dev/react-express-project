var React = require('react');
var ReactDom = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var LeadCapture = require('./components/LeadCapture.jsx');
var NavBar = require('./components/nav/NavBar.jsx')


ReactDom.render(<ListManager title="TO-DO" headingColor="#b31217"/>, document.getElementById('todo'));
ReactDom.render(<ListManager title="DONE" />, document.getElementById('done'));
ReactDom.render(<ListManager title="TO-REVIEW"/>, document.getElementById('toreview'));
//ReactDom.render(<LeadCapture/>, document.getElementById('email'));

var navLinks = [
  { title: "Plugins", href: "#" },
  { title: "Help", href: "#" }
];

ReactDom.render(<NavBar brand="Trell0" navData={navLinks} bgColor="#FFF" titleColor="#3097d1" />, document.getElementById('main-nav'));
