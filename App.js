import React, {useState} from 'react';
import GuessInput from './components/GuessInput';
import {View, Text, StyleSheet} from 'react-native';
import GameScreen from './screens/GameScreen';
import Startscreen from './screens/startScreen';
import GameoverScreen from './screens/GameoverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(null);

  const pickedNumber = x => {
    setUserNumber(x);
    setIsGameOver(false);
  };

  const ongameOver = () => {
    setIsGameOver(true);
  };

  let screen;
  if (!userNumber && isGameOver) {
    screen = <Startscreen pickedNumber={pickedNumber} />;
  }
  if (userNumber && !isGameOver) {
    screen = (
      <GameScreen
        setRoundNumber={setRoundNumber}
        ongameOver={ongameOver}
        choosenNumber={userNumber}
      />
    );
  }
  if (isGameOver && userNumber) {
    screen = <GameoverScreen totalRounds={roundNumber} target={userNumber} />;
  }

  return <>{screen}</>;
};

export default App;
