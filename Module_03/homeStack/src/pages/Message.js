import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearNotification} from '../redux/action/notification';

const Message = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearNotification('message'));
  }, []);
  return (
    <View>
      <Text>Message Page</Text>
    </View>
  );
};

export default Message;
