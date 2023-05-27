import React from 'react';
import SecondaryButton from './SecondaryButton';
import {StyleSheet, Text, View} from 'react-native';

const GuessContainer = ({
  generateRandomNumber,
  setGuess,
  choosenNumber,
  setGuessLog,
  currGuess,
}) => {
  const pressHandler = dir => {
    if (dir === '-') {
      const newRndNum = generateRandomNumber(choosenNumber - 1, currGuess);
      setGuess(newRndNum);
      setGuessLog(prev => [newRndNum, ...prev]);
    } else {
      const newRndNum = generateRandomNumber(currGuess + 1, choosenNumber + 1);
      setGuess(newRndNum);
      setGuessLog(prev => [newRndNum, ...prev]);
    }
  };

  return (
    <View style={styles.inputScreen}>
      <View style={styles.inputContainer}>
        <Text style={{color: 'gold', fontSize: 25}}>Higher or Lower?</Text>
      </View>
      <View style={styles.btnContainer}>
        <SecondaryButton pressHandler={() => pressHandler('+')} val={'+'} />
        <SecondaryButton pressHandler={() => pressHandler('-')} val={'-'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 5,
    padding: 5,
  },
  inputField: {
    width: '20%',
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'gold',
    color: 'gold',
    fontWeight: '500',
    textAlign: 'center',
    padding: 4,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 70,
    marginTop: 20,
  },
  inputScreen: {
    color: 'white',
    padding: 20,
    marginTop: 30,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#7B2869',
  },
});
export default GuessContainer;
