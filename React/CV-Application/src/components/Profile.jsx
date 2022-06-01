import React, { Component } from 'react';
import Overlay from './Overlay';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      picture:
        'https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg',
      edit: false,
    };
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('picture').value;

    this.setState({
      picture: url,
    });
  };

  render() {
    const { picture, edit } = this.state;

    return (
      <div id="profile">
        <Overlay event={this.toggleEdit} choice="profile" />
        <img src={picture} />

        {edit && (
          <form
            onSubmit={this.handleFormSubmit}
            className="picture form"
          >
            <label htmlFor="picture">Enter image url</label>
            <input
              id="picture"
              type="text"
              placeholder="Ex : https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg"
            />
            <div className="row-wrapper">
              <button type="submit">Ok</button>
              <button onClick={this.toggleEdit} type="button">
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Profile;
