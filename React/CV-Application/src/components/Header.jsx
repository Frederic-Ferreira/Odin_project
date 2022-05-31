import React, { Component } from 'react';
import Button from './Button';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Your name',
      title: 'Your title',
      resume:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam nisi aspernatur a vel deserunt facere laborum ipsa id consequuntur quod voluptatibus cumque, quas fugit eum autem aut temporibus asperiores!',
      edit: true,
    };
  }

  render() {
    const { name, title, resume, edit } = this.state;

    return (
      <div id="header">
        <Button choice="edit" />
        <h1>{name}</h1>
        <h3>{title}</h3>
        <h5>Profile</h5>
        <p>{resume}</p>

        {edit && (
          <form id="header-form">
            <input type="text" value={name} />
            <input type="text" value={title} />
            <textarea type="text" value={resume} />
          </form>
        )}
      </div>
    );
  }
}

export default Header;
