import React from 'react';

const Button = (props) => {
  const { choice, event } = props;

  return (
    <button
      onClick={event}
      id={choice + '-btn'}
      className="button"
      type="button"
    >
      {choice}
    </button>
  );
};

export default Button;
