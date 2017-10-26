let React = require('react');
let List = require('./List.jsx');
let createReactClass = require('create-react-class');
var services = require('../services/services.js');


/*
  props:
    title
    items
    headingColor: si esta definido se aplica
*/
let ListManager = createReactClass({

  getInitialState: function(){
    return {items: [], newItemText: ""};
  },

  componentWillMount: function(){
    services.get('/todos')
    .then(function(data){
      console.dir(data);
      this.setState({items: data});
    }.bind(this));
  },

  handleSubmit: function(e){
    e.preventDefault();
    let currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items:currentItems, newItemText:""}); // hay que limpiar el newitem ?
  },

  handleChange: function(e){
    {/*this is a comment*/}
    console.log("handle change");
    let newTodo = e.target.value;
    this.setState({
      newItemText : newTodo
    });
  },

  render: function(){

    let divStyle = {
      marginTop: 10
    };

    let headingStyle = {

    };

    if(this.props.headingColor){
      headingStyle.backgroundColor = this.props.headingColor;
    }

    return(
        <div style ={divStyle} className="col-sm-4">
          <div className="panel panel-primary">
              <div style={headingStyle} className="panel-heading">
                  <h3>{this.props.title}</h3>
              </div>
              <div className="row panel-boy">
                <form onSubmit={this.handleSubmit}>
                    <div className ="col-sm-9">
                        <input type="text" placeholder="add new todo" value={this.state.newItemText} onChange={this.handleChange}/>
                    </div>
                    <div className ="col-sm-2">
                      <button className="btn btn-primary">Add </button>
                    </div>
                </form>
                <List items={this.state.items}/>
              </div>
            </div>
          </div>
    );
  }

});

module.exports = ListManager;
