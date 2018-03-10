export const initialAddresses = addresses => {
  return { type: 'LOGOUT' };
};

export const logout = () => {
  firebase.auth().signOut();
  return { type: 'LOGOUT' };
};
