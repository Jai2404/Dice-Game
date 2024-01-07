import React, { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay'; // Import your GamePlay component

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
};

export default App;
