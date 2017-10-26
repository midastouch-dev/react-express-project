var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');

var List = createReactClass({
  render: function(){
    let items = this.props.items.map((item)=>{
       return <ListItem key={item.id} ingredient = {item.ingredient}/>
    });
    return(
      <ul>
        {items}
      </ul>
    );
  }
});

module.exports = List;
