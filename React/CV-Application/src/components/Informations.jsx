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
      edit: false,
    };
  }

  setAddress = () => {
    const address = document.getElementById('address').value;

    this.setState({
      address: address,
    });
  };

  setZip = () => {
    const zip = document.getElementById('zip').value;

    this.setState({
      zip: zip,
    });
  };

  setPhone = () => {
    const phone = document.getElementById('phone').value;

    this.setState({
      phone: phone,
    });
  };

  setEmail = () => {
    const email = document.getElementById('email').value;

    this.setState({
      email: email,
    });
  };

  setWebsite = () => {
    const website = document.getElementById('website').value;

    this.setState({
      website: website,
    });
  };

  setLinkedin = () => {
    const linkedin = document.getElementById('linkedin').value;

    this.setState({
      linkedin: linkedin,
    });
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    const { address, zip, phone, email, website, linkedin, edit } =
      this.state;

    return (
      <div id="informations">
        <Button event={this.toggleEdit} choice="edit" />
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

        {edit && (
          <form className="informations form">
            <input
              id="address"
              type="text"
              onChange={this.setAddress}
              value={address}
              required
            />
            <input
              id="zip"
              type="text"
              onChange={this.setZip}
              value={zip}
              required
            />
            <input
              id="phone"
              type="text"
              onChange={this.setPhone}
              value={phone}
              required
            />
            <input
              id="email"
              type="text"
              onChange={this.setEmail}
              value={email}
              required
            />
            <input
              id="website"
              type="text"
              onChange={this.setWebsite}
              value={website}
            />
            <input
              id="linkedin"
              type="text"
              onChange={this.setLinkedin}
              value={linkedin}
              required
            />
            <button onClick={this.toggleEdit} type="button">
              Close
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Informations;
