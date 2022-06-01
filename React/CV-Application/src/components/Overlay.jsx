import React from 'react';

const Overlay = (props) => {
  const { choice, event } = props;

  return <div onClick={event} className={choice + ' overlay'}></div>;
};

export default Overlay;
