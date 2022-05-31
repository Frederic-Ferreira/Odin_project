import React, { Component } from 'react';
import Button from './Button';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [
        {
          company: 'Super Awesome Web',
          title: 'Senior Web Developer',
          start: 'AUG 2019',
          end: 'JULY 2020',
          location: 'New York City, NY',
          description: 'minor: leprem ipsum dolor reprehem narutale',
        },
        {
          company: 'Super Awesome Web',
          title: 'Senior Web Developer',
          start: 'AUG 2019',
          end: 'JULY 2020',
          location: 'New York City, NY',
          description: 'minor: leprem ipsum dolor reprehem narutale',
        },
        {
          company: 'Super Awesome Web',
          title: 'Senior Web Developer',
          start: 'AUG 2019',
          end: 'JULY 2020',
          location: 'New York City, NY',
          description: 'minor: leprem ipsum dolor reprehem narutale',
        },
        {
          company: 'Super Awesome Web',
          title: 'Senior Web Developer',
          start: 'AUG 2019',
          end: 'JULY 2020',
          location: 'New York City, NY',
          description: 'minor: leprem ipsum dolor reprehem narutale',
        },
      ],
      add: false,
    };
  }

  toggleAdd = () => {
    this.setState({
      add: !this.state.add,
    });
  };

  clearInputFields() {
    const company = document.getElementById('company');
    const title = document.getElementById('title');
    const start = document.getElementById('start');
    const end = document.getElementById('end');
    const location = document.getElementById('location');
    const description = document.getElementById('description');

    const fields = [
      company,
      title,
      start,
      end,
      location,
      description,
    ];

    fields.forEach((field) => (field.value = ''));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const company = document.getElementById('company').value;
    const title = document.getElementById('title').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    const experience = {
      company,
      title,
      start,
      end,
      location,
      description,
    };

    this.clearInputFields();
    this.toggleAdd();

    this.setState({
      experiences: this.state.experiences.concat([experience]),
    });
  };

  render() {
    const { experiences, add } = this.state;

    return (
      <div id="experience">
        <Button event={this.toggleAdd} choice="add" />
        <h2>Experience</h2>
        <ul>
          {experiences.map((experience) => {
            return (
              <li key={uniqid()}>
                <div>
                  <h4>
                    {experience.start} - {experience.end}
                  </h4>
                  <h5>{experience.title}</h5>
                </div>
                <div>
                  <h4>{experience.company}</h4>
                  <h5>{experience.location}</h5>
                  <p>{experience.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {add && (
          <form
            onSubmit={this.handleFormSubmit}
            className="experience form"
          >
            <input
              id="company"
              type="text"
              placeholder="Company name"
              required
            />
            <input
              id="title"
              type="text"
              placeholder="Post's title"
              required
            />
            <input
              id="start"
              type="text"
              placeholder="From ... month/year"
              required
            />
            <input
              id="end"
              type="text"
              placeholder="To ... month/year"
              required
            />
            <input
              id="location"
              type="text"
              placeholder="Location"
              required
            />
            <textarea
              id="description"
              type="text"
              placeholder="Job's description"
              required
            />
            <div className="row-wrapper">
              <button type="submit">Add</button>
              <button onClick={this.toggleAdd} type="button">
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Experience;
