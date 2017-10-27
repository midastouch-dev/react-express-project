let React = require('react');
let createReactClass = require('create-react-class');
let validator = require('email-validator');

let EmailField = createReactClass({

   getInitialState: function(){
     return ({emailInputText:"", emailValid: true});
   },

   clearField: function(){
     this.setState({emailInputText:"", emailValid: true});
   },

   handleMailChange: function(e){
     let emailValue = e.target.value;
     let valid = validator.validate(emailValue);
     this.setState({emailInputText: emailValue, emailValid: valid});
   },

   render: function(){
     let formClass = "form-group";
     if(!this.state.emailValid){
        formClass = "form-group has-error";
     }
     return (
       <div className={formClass}>
           <input className="form-control" onChange ={this.handleMailChange} placeholder="Email" value={this.state.emailInputText} />
       </div>
     );
   }

});

module.exports = EmailField;
