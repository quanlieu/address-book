const initState = {
  streetNumber: '',
  route: '',
  ward: '',
  district: '',
  city: '',
  country: ''
};

export default function(state = initState, action) {
  const { type } = action;

  switch (type) {
    case 'UPDATE_CURRENT_ADDRESS':
      return Object.assign({}, action.address);
    default:
      return state;
  }
}
