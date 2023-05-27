import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';
import Log from '../components/Log';
import GuessContainer from '../components/GuessContainer';

const generateRandomNumber = (min, max, val) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === val) {
    return generateRandomNumber(min, max, val);
  } else {
    return rndNum;
  }
};

const GameScreen = ({choosenNumber, ongameOver, setRoundNumber}) => {
  const initialGuess = generateRandomNumber(1, 100, choosenNumber);
  const [currGuess, setGuess] = useState(initialGuess);
  const [guessLog, setGuessLog] = useState([initialGuess]);

  useEffect(() => {
    if (currGuess === choosenNumber) {
      setRoundNumber(guessLog.length);
      ongameOver();
    }
  }, [currGuess, ongameOver, choosenNumber]);

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{flex: 1}}
        resizeMode="cover"
        imageStyle={{opacity: 0.2}}>
        <View style={styles.screen}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Game Screen</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.guess}>{currGuess}</Text>
          </View>
          <GuessContainer
            generateRandomNumber={generateRandomNumber}
            setGuess={setGuess}
            choosenNumber={choosenNumber}
            currGuess={currGuess}
            setGuessLog={setGuessLog}
          />
          <FlatList
            style={styles.logs}
            data={guessLog}
            renderItem={({item, index}) => (
              <Log roundNumber={guessLog.length - index} guess={item} />
            )}
            keyExtractor={item => item}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  headingContainer: {
    width: '80%',
    justifyContent: 'center',
    marginTop: 2,
    alignItems: 'center',
    padding: 10,
  },

  heading: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'OpenSans',
    fontWeight: '700',
  },
  numberContainer: {
    width: '75%',
    marginTop: 30,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#ddb52f',
  },
  guess: {
    color: '#ddb52f',
    fontSize: 40,
    fontWeight: '700',
  },
  logs: {
    margin: 20,
    minWidth: '65%',
  },
});

export default GameScreen;
