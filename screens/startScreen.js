import React, {useState} from 'react';
import GuessInput from '../components/GuessInput';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';

const Startscreen = ({pickedNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{flex: 1}}
        resizeMode="cover"
        imageStyle={{opacity: 0.2}}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Guess My Number</Text>
          </View>
          <GuessInput
            enteredNumber={enteredNumber}
            setEnteredNumber={setEnteredNumber}
            pickedNumber={pickedNumber}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    justifyContent: 'flex-start',
    flex: 1,
  },
  headingContainer: {
    width: '75%',

    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  },
});

export default Startscreen;
