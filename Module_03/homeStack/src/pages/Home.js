import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearNotification} from '../redux/action/notification';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearNotification('home'));
  }, []);

  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
