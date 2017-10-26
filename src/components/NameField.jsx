var React = require('react');
var createReactClass = require('create-react-class');

/*
  props:
      placeholder
  state:
      name
*/
var NameField = createReactClass({
  getInitialState: function(){
    return {name:""};
  },

  clearField: function(){
    this.setState({name:""})
  },

  onNameChange: function(e){
    this.setState({name: e.target.value});
  },

  render: function(){
    return(
      <input className="form-control"
        placeholder={this.props.placeholder}
        onChange={this.onNameChange}
        value = {this.state.name}/>
    );
  }
});

module.exports = NameField;
