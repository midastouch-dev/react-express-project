var React = require('react');
var createReactClass = require('create-react-class');

/*
   props:
    text
*/
var ListItem = createReactClass({
  render: function(){
    return (
      <li>
        <h6>{this.props.text}</h6>
      </li>
    );
  }
});

module.exports = ListItem;
