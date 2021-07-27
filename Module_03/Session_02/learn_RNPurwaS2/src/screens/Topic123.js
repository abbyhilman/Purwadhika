import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Topic123 = () => {
  return (
    <View style={styles.page}>
      {/* <Text style={styles.text}>Hello Word</Text>
      <Text style={{...styles.text, fontSize: 26}}>Coba</Text>
      <Text>
        React <Text style={{color: 'lightgrey'}}>Native</Text>
      </Text> */}
      <View style={{...styles.boxBlue}}></View>
      <View style={{...styles.boxRed}}></View>
      <View style={{...styles.boxGreen}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 30,
  },
  text: {fontSize: 18},
  boxBlue: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
  boxRed: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  boxGreen: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
});

export default Topic123;
