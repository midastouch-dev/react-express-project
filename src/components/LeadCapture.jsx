var React = require('react');
var createReactClass = require('create-react-class');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = createReactClass({

  onSave: function(e){
    let emailFieldChild = this.refs.emailField;
    let nameFieldChild = this.refs.nameField;
    // if child email input has valid data
    if(!emailFieldChild.state.emailValid){
      alert("Email required!");
    }else {
      emailFieldChild.clearField();
      nameFieldChild.clearField();
    }
  },

  render: function(){
    return(
      <div className ="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
              <NameField placeholder = "First name" ref="nameField"/>
              <EmailField ref="emailField"/>
              <button className="btn btn-primary" onClick={this.onSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }


});

module.exports = LeadCapture;
