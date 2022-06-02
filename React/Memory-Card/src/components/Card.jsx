import React from 'react';

function Card(props) {
  const { infos } = props;

  return (
    <div className="card">
      <img alt={infos.name} src={infos.url} />
      <p>{infos.name}</p>
    </div>
  );
}

export default Card;
