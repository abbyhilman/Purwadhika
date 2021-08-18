import React from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';

const SafeArea = ({children}) => {
  return (
    <SafeAreaView
      style={{
        paddingTop:
          Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
      }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
