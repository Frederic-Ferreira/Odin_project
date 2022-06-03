import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Winning from './components/Winning';
import Cardboard from './components/Carboard';

function App() {
  const [score, setScore] = useState({ current: 10, best: 0 });
  const [showMenu, setShowMenu] = useState(true);
  const [winner, setWinner] = useState(false);

  const init = () => {
    setScore({
      current: 0,
      best: score.best,
    });
    setShowMenu(false);
    setWinner(false);
  };

  const increment = () => {
    setScore({
      current: score.current + 1,
      best: score.best,
    });
  };

  const setBest = (score) => {
    setScore({
      current: 0,
      best: score,
    });
  };

  useEffect(() => {
    if (score.current === 12) {
      setWinner(true);
      setScore({
        current: score.current,
        best: score.current,
      });
    }
  }, [score.current]);

  return (
    <div className="App">
      <header>
        <h1>Memory Card</h1>
        {showMenu ? (
          ''
        ) : (
          <h2 id="display">Never click on the same card twice!</h2>
        )}
        <div className="scores">
          <div className="inline-score">
            <h3>Current score: </h3>
            {showMenu ? '' : <p>{score.current}</p>}
          </div>
          <div className="inline-score">
            <h3>Best score: </h3>
            {showMenu ? '' : <p>{score.best}</p>}
          </div>
        </div>
      </header>
      {showMenu ? (
        <Menu play={init} />
      ) : winner ? (
        <Winning replay={init} />
      ) : (
        <Cardboard
          increment={increment}
          setBest={setBest}
          setWinner={setWinner}
          score={score}
        />
      )}
    </div>
  );
}

export default App;
