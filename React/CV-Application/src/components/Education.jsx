import React from 'react';
import Button from './Button';

const Education = (props) => {
  return (
    <div id="education">
      <Button choice="add" />
      <h2>Education</h2>
      <ul>
        <li>
          <div>
            <h4>Aug 2019 - JULY 202</h4>
            <h5>B.S. Web Development</h5>
          </div>
          <div>
            <h4>Cool University</h4>
            <h5>New York City, NY</h5>
            <p>minor: leprem ipsum dolor</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
