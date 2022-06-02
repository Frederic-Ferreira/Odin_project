import React, { useState } from 'react';
import Card from './Card';

import Rick from '../images/rick.png';
import Beth from '../images/beth.png';
import Bird from '../images/bird.png';
import Fart from '../images/fart.png';
import Jerry from '../images/jerry.png';
import Morty from '../images/morty.png';
import MortyJr from '../images/mortyjr.png';
import Poopy from '../images/poopy.png';
import Scaryterry from '../images/scaryterry.png';
import Squanchy from '../images/squanchy.png';
import Summer from '../images/summer.png';
import Wong from '../images/wong.png';

function Cardboard() {
  const [cards, setCards] = useState([
    {
      name: 'Rick Sanchez',
      url: Rick,
    },
    {
      name: 'Beth Smith',
      url: Beth,
    },
    {
      name: 'Morty Smith',
      url: Morty,
    },
    {
      name: 'Poopy Butthole',
      url: Poopy,
    },
    {
      name: 'Birdperson',
      url: Bird,
    },
    {
      name: 'Fart 💨',
      url: Fart,
    },
    {
      name: 'Dr. Wong',
      url: Wong,
    },
    {
      name: 'Jerry Smith',
      url: Jerry,
    },
    {
      name: 'Morty Jr.',
      url: MortyJr,
    },
    {
      name: 'Scary Terry',
      url: Scaryterry,
    },
    {
      name: 'Squanchy',
      url: Squanchy,
    },
    {
      name: 'Summer Smith',
      url: Summer,
    },
  ]);

  return (
    <div id="cardboard">
      {cards.map((card) => {
        return <Card infos={card} />;
      })}
    </div>
  );
}

export default Cardboard;
