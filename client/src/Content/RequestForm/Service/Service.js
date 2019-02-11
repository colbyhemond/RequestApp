import React from 'react';
import './Service.css';

class Service extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onServicesChange(event.target.value);
  }

  render() {

    let services = this.props.state.services;
    let optionItems = services.map((service) => <option key={service.id} value={service.value}>{service.service}</option>);

    return (<div >
      <select className="select" value={this.props.value} onChange={this.handleChange}>
        {optionItems}
      </select>
    </div>)
  }
}

export default Service;
