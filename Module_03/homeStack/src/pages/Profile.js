import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  const clearNotification = () => {
    dispatch({
      type: 'CLEAR_NOTIF_PAGE',
      payload: 'profile',
    });
  };

  useEffect(() => {
    clearNotification();
  }, []);
  return (
    <View>
      <Text>Profile Page</Text>
    </View>
  );
};

export default Profile;
