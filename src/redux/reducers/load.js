const initState = {
  loading: false
};

export default function(state = initState, action) {
  const { type } = action;

  switch (type) {
    case '@@reactReduxFirebase/LOGIN':
      return { loading: true };
    case '@@reactReduxFirebase/SET_PROFILE':
      return { loading: false };
    default:
      return state;
  }
}
