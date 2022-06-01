import React, { Component } from 'react';
import Button from './Button';
import uniqid from 'uniqid';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      educations: [
        {
          school: 'Cool University',
          degree: 'B.S. Web Development',
          start: 'AUG 2019',
          end: 'JULY 2020',
          location: 'New York City, NY',
          details: 'minor: leprem ipsum dolor',
          id: uniqid(),
        },
      ],
      add: false,
    };
  }

  clearInputFields() {
    const school = document.getElementById('school');
    const degree = document.getElementById('degree');
    const start = document.getElementById('start');
    const end = document.getElementById('end');
    const location = document.getElementById('location');
    const details = document.getElementById('details');

    const fields = [school, degree, start, end, location, details];

    fields.forEach((field) => (field.value = ''));
  }

  handleDelete = (e) => {
    const id = e.target.closest('li').id;
    this.setState({
      educations: this.state.educations.filter(
        (education) => education.id !== id
      ),
    });
  };

  toggleAdd = () => {
    this.setState({
      add: !this.state.add,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const location = document.getElementById('location').value;
    const details = document.getElementById('details').value;

    const education = {
      school,
      degree,
      start,
      end,
      location,
      details,
      id: uniqid(),
    };

    this.clearInputFields();
    this.toggleAdd();

    this.setState({
      educations: this.state.educations.concat([education]),
    });
  };

  render() {
    const { educations, add } = this.state;

    return (
      <div id="education">
        <Button event={this.toggleAdd} choice="add" />
        <h2>Education</h2>
        <ul>
          {educations.map((education) => {
            return (
              <li
                onClick={this.handleDelete}
                id={education.id}
                key={uniqid()}
              >
                <div>
                  <h4>
                    {education.start} - {education.end}
                  </h4>
                  <h5>{education.degree}</h5>
                </div>
                <div>
                  <h4>{education.school}</h4>
                  <h5>{education.location}</h5>
                  <p>{education.details}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {add && (
          <form
            onSubmit={this.handleFormSubmit}
            className="education form"
          >
            <input
              id="school"
              type="text"
              placeholder="Your school"
              required
            />
            <input
              id="degree"
              type="text"
              placeholder="Your degree"
              required
            />
            <input
              id="start"
              type="text"
              placeholder="From ... FEB 2019"
              required
            />
            <input
              id="end"
              type="text"
              placeholder="To ... AUG 2020"
              required
            />
            <input
              id="location"
              type="text"
              placeholder="Location"
              required
            />
            <textarea
              id="details"
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

export default Education;
