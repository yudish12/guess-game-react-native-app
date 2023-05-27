import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {LinearGradientProps} from 'react-native-linear-gradient';
const Log = ({guess, roundNumber}) => {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Opponent's Guess {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logContainer: {
    backgroundColor: '#c2a90f',
    maxWidth: '100%',
    justifyContent: 'flex-start',
    gap: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logText: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default Log;
