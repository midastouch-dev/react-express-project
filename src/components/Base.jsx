let React = require('react');
let createReactClass = require('create-react-class');

var Base = createReactClass({
    render: function(){
        <div>
          <h1>Header 1</h1>
          {this.props.children}
          <h1>Footer</h1>
        </div>
    }
});
