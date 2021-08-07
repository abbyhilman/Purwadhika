import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const clearNotification = () => {
    dispatch({
      type: 'CLEAR_NOTIF_PAGE',
      payload: 'home',
    });
  };

  useEffect(() => {
    clearNotification();
  }, []);
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
