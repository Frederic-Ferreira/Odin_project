import React, { useEffect, useState } from 'react';
import Video from './components/Video';
import Cardboard from './components/Carboard';

function App() {
  const [score, setScore] = useState({ current: 10, best: 0 });
  const [winner, setWinner] = useState(false);

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
    if (score.current === 12) setWinner(true);
  }, [score.current]);

  return (
    <div className="App">
      <header>
        <h1>Memory Card</h1>
        <h2 id="display">Never click on the same card twice!</h2>
        <div className="scores">
          <div className="inline-score">
            <h3>Current score: </h3>
            <p>{score.current}</p>
          </div>
          <div className="inline-score">
            <h3>Best score: </h3>
            <p>{score.best}</p>
          </div>
        </div>
      </header>
      {winner ? (
        <Video />
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
