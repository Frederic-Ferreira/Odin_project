import React, { Component } from 'react';
import Button from './Button';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      company: 'Super Awesome Web',
      title: 'Senior Web Developer',
      start: 'AUG 2019',
      end: 'JULY 2020',
      location: 'New York City, NY',
      description: 'minor: leprem ipsum dolor reprehem narutale',
    };
  }

  render() {
    const { company, title, start, end, location, description } =
      this.state;

    return (
      <div id="experience">
        <Button choice="add" />
        <h2>Experience</h2>
        <ul>
          <li>
            <div>
              <h4>
                {start} - {end}
              </h4>
              <h5>{title}</h5>
            </div>
            <div>
              <h4>{company}</h4>
              <h5>{location}</h5>
              <p>{description}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
