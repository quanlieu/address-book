import { updateCurrentAddress } from '../../src/redux/actions/address';

describe('Address actions', () => {
  test('should create at action to update address', () => {
    const address = 'Fortress of solitude';
    const expectedAction = { type: 'UPDATE_CURRENT_ADDRESS', address };
    expect(updateCurrentAddress(address)).toEqual(expectedAction);
  });
});
