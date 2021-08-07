import {configureStore} from '@reduxjs/toolkit';
import notification from './reducer/notification';

const store = configureStore({
  reducer: notification,
});

export default store;
