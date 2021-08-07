export const clearNotification = pages => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_NOTIF_PAGE',
      payload: pages,
    });
  };
};
