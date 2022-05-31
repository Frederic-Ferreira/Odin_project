import React from 'react';
import Button from './Button';

const Skills = (props) => {
  return (
    <div id="skills">
      <Button choice="edit" />
      <h4>Skills</h4>
      <ul>
        <li>Creative thunking</li>
        <li>Communication</li>
        <li>Listening</li>
        <li>Detail-Oriented</li>
      </ul>
    </div>
  );
};

export default Skills;
