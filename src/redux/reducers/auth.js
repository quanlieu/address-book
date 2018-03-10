const initState = {
  authenticated: false
};

export default (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        authenticated: true
      };
    case 'LOGIN_FAIL':
      return {
        authenticated: false,
        errorCode: action.code,
        errorMessage: action.message
      };
    case 'LOGOUT':
      return {
        authenticated: false
      };
    case 'LOGOUT':
      return {
        authenticated: false
      };
    default:
      return state;
  }
};
