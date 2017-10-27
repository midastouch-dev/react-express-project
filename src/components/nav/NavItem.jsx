var React = require('react');
let createReactClass = require('create-react-class');

// props: title, url, hovereffect
var NavItem = createReactClass({
  getInitialState: function(){
    return {hoverClass: ""};
  },

  mouseOut: function(){
    this.setState({hoverClass:""});
  },

  mouseOver: function(){
    this.setState({hoverClass:"active"});
  },

  render: function(){
    return (
      <li className ={this.state.hoverClass} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <a href={this.props.href}>{this.props.title}</a>
      </li>
    );
  }
});

module.exports = NavItem;
