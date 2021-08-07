import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

const Message = () => {
  const dispatch = useDispatch();

  const clearNotification = () => {
    dispatch({
      type: 'CLEAR_NOTIF_PAGE',
      payload: 'message',
    });
  };

  useEffect(() => {
    clearNotification();
  }, []);
  return (
    <View>
      <Text>Message Page</Text>
    </View>
  );
};

export default Message;
