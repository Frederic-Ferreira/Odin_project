import React, { Component } from 'react';
import Overlay from './Overlay';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      picture:
        'https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg',
    };
  }

  render() {
    const { picture } = this.state;

    return (
      <div id="profile">
        <Overlay choice="profile" />
        <img src={picture} />
      </div>
    );
  }
}

export default Profile;
