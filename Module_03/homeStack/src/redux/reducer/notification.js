import {combineReducers} from 'redux';

const init_state = {
  home: 1, // 0
  message: 5, // 0
  profile: 3, // 0
};

const notif_reducer = (state = init_state, action) => {
  switch (action.type) {
    case 'CLEAR_NOTIF_PAGE':
      return {...state, [action.payload]: 0};
    default:
      return state;
  }
};

export default combineReducers({
  notification: notif_reducer,
});
