var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');

/*
  props:
        items
*/
var List = createReactClass({


  render: function(){
    let items = this.props.items.map((item) =>{
      return <ListItem key={item.id+item.text} text = {item.text}/>
    });
    return(
      <ul>
        {items}
      </ul>
    );
  },


});

module.exports = List;
