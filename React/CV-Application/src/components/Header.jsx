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
      edit: false,
    };
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  setName = () => {
    const name = document.getElementById('name');

    this.setState({
      name: name.value,
    });
  };

  setTitle = () => {
    const title = document.getElementById('title');

    this.setState({
      title: title.value,
    });
  };

  setResume = () => {
    const resume = document.getElementById('resume');

    this.setState({
      resume: resume.value,
    });
  };

  render() {
    const { name, title, resume, edit } = this.state;

    return (
      <div id="header">
        <Button event={this.toggleEdit} choice="edit" />
        <h1>{name}</h1>
        <h3>{title}</h3>
        <h5>Profile</h5>
        <p>{resume}</p>

        {edit && (
          <form className="header form">
            <input
              id="name"
              type="text"
              onChange={this.setName}
              value={name}
            />
            <input
              id="title"
              type="text"
              onChange={this.setTitle}
              value={title}
            />
            <textarea
              id="resume"
              type="text"
              onChange={this.setResume}
              value={resume}
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

export default Header;
