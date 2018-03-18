export const getUid = state => state.firebase.auth.uid;
export const getAddresses = state =>
  state.firebase.profile.isEmpty ? undefined : state.firebase.profile.addresses;
