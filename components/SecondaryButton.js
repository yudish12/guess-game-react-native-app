import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const SecondaryButton = ({val, pressHandler}) => {
  return (
    <Pressable onPress={pressHandler} style={styles.resetBtn}>
      <Text style={styles.btnText}>{val}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  resetBtn: {
    backgroundColor: '#B3005E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: '30%',
    alignItems: 'center',
    borderRadius: 18,
  },
  btnText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
});

export default SecondaryButton;
