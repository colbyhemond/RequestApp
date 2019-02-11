import React, {Component} from 'react';
import "./Content.css";
import RequestForm from "./RequestForm/RequestForm";

class Content extends Component {
  //constructor() {
  //  super();
  //}

  render() {
    return (<div className="content">
      <RequestForm/>
    </div>)
  }
}

export default Content;
