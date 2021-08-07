import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {clearNotification} from '../redux/action/notification';
import {useDispatch} from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearNotification('profile'));
  }, []);
  return (
    <View>
      <Text>Profile Page</Text>
    </View>
  );
};

export default Profile;
