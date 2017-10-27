var React = require('react');
let createReactClass = require('create-react-class');
var NavItem = require('./NavItem.jsx');
// props: navData
// props brand
var NavBar = createReactClass({
  render: function(){

    let navStyle={
      boxShadow: "0 0 4px rgba(0,0,0,0.4)",
      borderRadius: 0
    }

    if(this.props.bgColor){
      navStyle.background = this.props.bgColor;
    }

    if(this.props.titleColor){
      navStyle.color= this.props.titleColor;
    }

    let createNavLink =  function(item, index){
      return <NavItem key={item.title + index} href={item.href} title={item.title}/>;
    };

    return (
      <div>
        <nav style={navStyle} className="navbar-default">
          <div className ="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{this.props.brand}</a>
          </div>
          <div id="nav-collapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  {this.props.navData.map(createNavLink)}
              </ul>
          </div>
        </nav>
      </div>

    );
  }
});

module.exports = NavBar;
