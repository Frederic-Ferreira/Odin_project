import React, { useState, useEffect } from 'react';
import { randomItemsPosition } from '../helpers';
import uniqid from 'uniqid';
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

function Cardboard(props) {
  const { increment, setBest, score } = props;
  const { current, best } = score;

  const [cards, setCards] = useState([
    {
      name: 'Rick Sanchez',
      url: Rick,
      clicked: false,
    },
    {
      name: 'Beth Smith',
      url: Beth,
      clicked: false,
    },
    {
      name: 'Morty Smith',
      url: Morty,
      clicked: false,
    },
    {
      name: 'Poopy Butthole',
      url: Poopy,
      clicked: false,
    },
    {
      name: 'Birdperson',
      url: Bird,
      clicked: false,
    },
    {
      name: 'Fart 💨',
      url: Fart,
      clicked: false,
    },
    {
      name: 'Dr. Wong',
      url: Wong,
      clicked: false,
    },
    {
      name: 'Jerry Smith',
      url: Jerry,
      clicked: false,
    },
    {
      name: 'Morty Jr.',
      url: MortyJr,
      clicked: false,
    },
    {
      name: 'Scary Terry',
      url: Scaryterry,
      clicked: false,
    },
    {
      name: 'Squanchy',
      url: Squanchy,
      clicked: false,
    },
    {
      name: 'Summer Smith',
      url: Summer,
      clicked: false,
    },
  ]);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const newState = randomItemsPosition(cards, cards.length);

    setCards(newState);
  }, [update]);

  const handleClick = (e) => {
    const name = e.target.closest('div').lastElementChild.textContent;
    const card = cards.find((card) => card.name === name);
    const url = card.url;
    const clicked = card.clicked;

    let newState;

    if (clicked !== true) {
      increment();
      newState = cards.map((card) => {
        if (card.name === name)
          return {
            name: name,
            url: url,
            clicked: true,
          };
        else return card;
      });
    } else {
      if (current > best) setBest(current);
      else if (current < best) setBest(best);

      newState = cards.map(({ name, url }) => {
        return {
          name,
          url,
          clicked: false,
        };
      });
    }

    setCards(newState);
    setUpdate(!update);
  };

  return (
    <div id="cardboard">
      {cards.map((card) => {
        return (
          <Card key={uniqid()} event={handleClick} infos={card} />
        );
      })}
    </div>
  );
}

export default Cardboard;
