import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const GameoverScreen = ({totalRounds, target, restartFunction}) => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{flex: 1}}
        resizeMode="cover"
        imageStyle={{opacity: 0.2}}>
        <View style={styles.screen}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>GAME OVER!!</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/success.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.msgcont}>
            <Text style={styles.message}>
              Your Phone Required {totalRounds} Rounds to guess the number{' '}
              {target}.
            </Text>
          </View>
          <View>
            <PrimaryButton pressHandler={restartFunction} val="Restart" />
          </View>
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
    marginTop: 30,
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
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 6,
    margin: 10,
  },
  message: {
    textAlign: 'center',
    fontFamily: 'open-sans',
    fontSize: 20,
    fontWeight: '900',
  },
  msgcont: {
    padding: 20,
    alignItems: 'center',
  },
});

export default GameoverScreen;
