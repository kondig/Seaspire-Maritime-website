import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {clicked:false};
  }
  render() {
    const {listItems, listname} = this.props;

    const style = {
      line: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
      },
      no: {
        textDecorationLine: "none",
      }
    };
    const selected = (this.state.clicked) ? 'line' : 'no';
    return (this.state.clicked) ? (
      <div className="dropdown-container" onClick={this.dropdownitem.bind(this)}>
        <button className="dropdown-title" style={style[selected]} > {listname} </button>
              <div className="dropdown-content">
                <br/> 
                <ul>
                  <li> {listItems[0]} </li>
                  <li> {listItems[1]} </li>
                  <li> {listItems[2]} </li>
                </ul>
              </div>
          </div> ) : (
        <div className="dropdown-container" onClick={this.dropdownitem.bind(this)}>
          <button className="dropdown-title" style={style[selected]} > {listname} </button>
        </div> )
  }
  dropdownitem() {
    this.setState({clicked: !this.state.clicked});
      console.log("clicked is: " + this.state.clicked + this.props.clicked);
    }

}


export {Dropdown}
