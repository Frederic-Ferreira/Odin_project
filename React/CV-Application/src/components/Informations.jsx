import React, { Component } from 'react';
import Button from './Button';

class Informations extends Component {
  constructor() {
    super();
    this.state = {
      address: '123 Address St',
      zip: 'City, ST 55555',
      phone: '55555',
      email: 'arobase@mail.com',
      website: 'website.com',
      linkedin: 'Linkedin.com/in/user-name',
    };
  }

  render() {
    const { address, zip, phone, email, website, linkedin } =
      this.state;

    return (
      <div id="informations">
        <Button choice="edit" />
        <div className="category">
          <h6>Address</h6>
          <p>{address}</p>
          <p>{zip}</p>
        </div>
        <div className="category">
          <h6>Phone</h6>
          <p>{phone}</p>
        </div>
        <div className="category">
          <h6>Email</h6>
          <p>{email}</p>
        </div>
        <div className="category">
          <h6>Online</h6>
          <p>{website}</p>
          <p>{linkedin}</p>
        </div>
      </div>
    );
  }
}

export default Informations;
