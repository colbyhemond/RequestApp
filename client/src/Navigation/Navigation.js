import React, {Component} from 'react';
import "./Navigation.css";
import Option from "./Option/Option"

class Navigation extends Component {
  //constructor() {
  //  super();
  //}

  render() {
    return (<div className="navigation">
      <Option text="Home"/>
      <Option text="Request"/>
    </div>)
  }
}

export default Navigation;
