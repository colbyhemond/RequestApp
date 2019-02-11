import React, {Component} from 'react';
import "./Option.css";

class Option extends Component {
  //constructor(props) {
  //super(props);
  //}

  render() {
    return (<div className="navOption">
      {this.props.text}</div>)
  }
}

export default Option;
