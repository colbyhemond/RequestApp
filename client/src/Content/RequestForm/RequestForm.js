import React, {Component} from 'react';
import "./RequestForm.css";
import Service from "./Service/Service";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      service: '',
      services: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleServicesChange = this.handleServicesChange.bind(this);
  }

  createNotification = (type) => {
    return() => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('We will be in contact soon.', 'Request Submitted');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        default:
          console.log(`Notification not found`);
      }
    };
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});

  }

  handleServicesChange(service) {
    this.setState({service: service})
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      service: this.state.service
    };

    fetch('/emails/requestform', {
      method: 'post',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(this.createNotification('success')).catch(error => console.log(`Error posting form: ` + error));

  }

  componentDidMount() {
    let initialServices = [];
    fetch('/services').then(response => {
      return response.json();
    }).then(data => {
      initialServices = data.map((service) => {
        return service;
      });
      this.setState({services: initialServices});
    }).catch(error => console.log(error));

  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (<div>
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>

        <h2>Contact Information</h2>

        <label>Name</label>
        <input name="name" type="name" id="name" value={this.state.name} onChange={this.handleChange}/>

        <label>Phone</label>
        <input name="phone" type="phone" id="phone" value={this.state.phone} onChange={this.handleChange}/>

        <label>Email</label>
        <input name="email" type="email" id="email" value={this.state.email} onChange={this.handleChange}/>

        <h2>Request Services</h2>

        <label>Service</label>
        <Service name="service" state={this.state} onServicesChange={this.handleServicesChange}/>

        <input className="button" type="submit"/>

      </form>

      <NotificationContainer/>
    </div>)
  }
}

export default RequestForm;
