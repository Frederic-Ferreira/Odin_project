import React from 'react';
import Cardboard from './components/Carboard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Memory Card</h1>
        <div className="scores">
          <h3>
            Current score: <span className="score">0</span>
          </h3>
          <h3>
            Best score: <span className="score">0</span>
          </h3>
        </div>
      </header>
      <Cardboard />
    </div>
  );
}

export default App;
