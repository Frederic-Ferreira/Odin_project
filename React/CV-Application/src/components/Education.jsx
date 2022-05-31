import React, { Component } from 'react';
import Button from './Button';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      school: 'Cool University',
      degree: 'B.S. Web Development',
      start: 'AUG 2019',
      end: 'JULY 2020',
      location: 'New York City, NY',
      details: 'minor: leprem ipsum dolor',
    };
  }

  render() {
    const { school, degree, start, end, location, details } =
      this.state;
    return (
      <div id="education">
        <Button choice="add" />
        <h2>Education</h2>
        <ul>
          <li>
            <div>
              <h4>
                {start} - {end}
              </h4>
              <h5>{degree}</h5>
            </div>
            <div>
              <h4>{school}</h4>
              <h5>{location}</h5>
              <p>{details}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
