import React from 'react';

function Card(props) {
  const { infos, event } = props;

  return (
    <div onClick={event} className="card">
      <img alt={infos.name} src={infos.url} />
      <p>{infos.name}</p>
    </div>
  );
}

export default Card;
