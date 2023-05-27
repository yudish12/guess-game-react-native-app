import React from 'react';
import {
  TextInput,
  Alert,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import PrimaryButton from './PrimaryButton';
const GuessInput = ({enteredNumber, setEnteredNumber, pickedNumber}) => {
  const ResetHandler = () => {
    setEnteredNumber('');
  };
  const ConfirmHandler = () => {
    const choosenNumber = enteredNumber * 1;
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number must be between 1 and 99', [
        {text: 'OK', onPress: ResetHandler, style: 'destructive'},
      ]);
      return;
    }
    pickedNumber(choosenNumber);
    return;
  };

  return (
    <View style={styles.inputScreen}>
      <View style={styles.inputContainer}>
        <Text style={{color: 'gold', fontSize: 25}}>Enter A Number</Text>
        <TextInput
          style={styles.inputField}
          keyboardType="number-pad"
          maxLength={3}
          autoCorrect={false}
          autoCapitalize={'none'}
          value={enteredNumber}
          onChangeText={key => setEnteredNumber(key)}
        />
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton pressHandler={ResetHandler} val="Reset" />
        <PrimaryButton pressHandler={ConfirmHandler} val="Confirm" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
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

export default GuessInput;
