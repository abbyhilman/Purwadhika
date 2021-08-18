import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {
  handleCancel,
  handleScheduleNotifications,
  showNotifications,
} from '../components/pushNotifIos';
import SafeArea from '../components/safeArea';
const Product = () => {
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => showNotifications('hello', 'test')}>
        <Text>Show Notif</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleScheduleNotifications('hello', 'test 5 second')}>
        <Text>Show Schedule Notif</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCancel()}>
        <Text>Cancel all Notif</Text>
      </TouchableOpacity>
    </SafeArea>
  );
};

export default Product;
