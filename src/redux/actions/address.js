export const updateCurrentAddress = address => {
  console.log(address);
  return {
    type: 'UPDATE_CURRENT_ADDRESS',
    address
  };
};
