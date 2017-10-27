let React = require('react');
let List = require('./List.jsx');
let createReactClass = require('create-react-class');
let Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var TodoStore = require('../reflux/todoStore.jsx');

/*
  props:
    title
    items
    headingColor: si esta definido se aplica
*/
let ListManager = createReactClass({
  // onChange es la funcion que va a escuchar del store
  mixins: [Reflux.listenTo(TodoStore, 'onTodoListChange')],

  getInitialState: function(){
    return {items: [], newItemText: ""};
  },

  componentWillMount: function(){
    Actions.getTodos();
  },

  onTodoListChange: function(event, todos){
    this.setState({items: todos})
  },

  handleSubmit: function(e){
    e.preventDefault();
    /*
    let currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items:currentItems, newItemText:""}); // hay que limpiar el newitem ?
    */

    // El store actualizaria mediante el callback onTodoListChange el listado de items por ende
    // no se encarga este componente de setear el nuevo item
    if(this.state.newItemText !== ""){
      Actions.postTodo(this.state.newItemText);
    }
    this.setState({newItemText:""});


  },

  handleChange: function(e){
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
