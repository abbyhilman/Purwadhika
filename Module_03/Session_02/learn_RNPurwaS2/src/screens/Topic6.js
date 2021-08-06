import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import LandscapeImg from '../assets/images/landscape.jpeg';

var {width} = Dimensions.get('window');

const Topic6 = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        }}
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
        }}
      /> */}
      <ScrollView>
        <Image
          source={LandscapeImg}
          // style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </ScrollView>
    </View>
  );
};

export default Topic6;
