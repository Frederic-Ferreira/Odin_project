import React from 'react';

const Overlay = (props) => {
  const { choice } = props;

  return <div className={choice + ' overlay'}></div>;
};

export default Overlay;
