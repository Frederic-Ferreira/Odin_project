import React from 'react';

const Button = (props) => {
  const { choice } = props;

  return (
    <button id={choice + '-btn'} type="button">
      {choice}
    </button>
  );
};

export default Button;
