import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
const PrimaryButton = ({val, pressHandler}) => {
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
  },
  btnText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});

export default PrimaryButton;
