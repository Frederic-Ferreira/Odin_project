import React, { Component } from 'react';
import Button from './Button';
import uniqid from 'uniqid';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        'Creative thinking',
        'Communication',
        'Listening',
        'Detail-Oriented',
        'Time-Management',
        'Problem Solving',
        'Artistice eye',
        'Adaptability',
      ],
    };
  }

  render() {
    const { skills } = this.state;

    return (
      <div id="skills">
        <Button choice="add" />
        <h4>Skills</h4>
        <ul>
          {skills.map((skill) => (
            <li key={uniqid()}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
