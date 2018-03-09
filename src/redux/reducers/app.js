const initState = {
  isAppReady: false
};

export default function(state = initState, action) {
  const { type } = action;

  switch (type) {
    case 'APP_READY':
      return Object.assign({}, state, {
        isAppReady: true
      });
    default:
      return state;
  }
}
