import React, { Component } from 'react';
import Button from './Button';
import uniqid from 'uniqid';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { title: 'Creative thinking', id: uniqid() },
        { title: 'Communication', id: uniqid() },
        { title: 'Listening', id: uniqid() },
        { title: 'Detail-Oriented', id: uniqid() },
        { title: 'Time-Management', id: uniqid() },
        { title: 'Problem Solving', id: uniqid() },
        { title: 'Artistice eye', id: uniqid() },
        { title: 'Adaptability', id: uniqid() },
      ],
      edit: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  clearInputField() {
    document.getElementById('skill').value = '';
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById('skill').value;
    const id = uniqid();

    const skill = { title, id };

    this.clearInputField();
    this.toggleEdit();

    this.setState({
      skills: this.state.skills.concat([skill]),
    });
  };

  handleDelete = (e) => {
    const { id } = e.target;

    this.setState({
      skills: this.state.skills.filter((skill) => skill.id !== id),
    });
  };

  render() {
    const { skills, edit } = this.state;

    return (
      <div id="skills">
        <Button event={this.toggleEdit} choice="add" />
        <h4>Skills</h4>
        <ul>
          {skills.map((skill) => (
            <li
              onClick={this.handleDelete}
              id={skill.id}
              key={uniqid()}
            >
              {skill.title}
            </li>
          ))}
        </ul>

        {edit && (
          <form
            onSubmit={this.handleFormSubmit}
            className="skills form"
          >
            <input id="skill" type="text" />
            <div className="row-wrapper">
              <button type="submit">Add</button>
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

export default Skills;
