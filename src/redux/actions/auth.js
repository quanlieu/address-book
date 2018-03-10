export const login = () => dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => dispatch({ type: 'LOGIN_SUCCESS' }))
    .catch(error =>
      dispatch({
        type: 'LOGIN_FAIL',
        code: error.code,
        message: error.message
      })
    );
};

export const logout = () => {
  firebase.auth().signOut();
  return { type: 'LOGOUT' };
};
