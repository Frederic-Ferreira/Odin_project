import React from 'react';
import Button from './Button';

const Experience = (props) => {
  return (
    <div id="experience">
      <Button choice="add" />
      <h2>Experience</h2>
      <ul>
        <li>
          <div>
            <h4>Aug 2019 - JULY 202</h4>
            <h5>Senior Web Development</h5>
          </div>
          <div>
            <h4>Super Awesome Web University</h4>
            <h5>New York City, NY</h5>
            <p>minor: leprem ipsum dolor reprehem narutale</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
