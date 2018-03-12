import address from '../../src/redux/reducers/address';

describe('Address reducers', () => {
  test('should return default address', () => {
    const defaultState = {
      streetNumber: '',
      route: '',
      ward: '',
      district: '',
      city: '',
      country: ''
    };
    expect(address(undefined, { type: 'Wrong type' })).toEqual(defaultState);
  });

  test('should return new address', () => {
    const expectedState = {
      streetNumber: '123',
      route: 'A Route',
      ward: 'A ward',
      district: 'A district',
      city: 'A city',
      country: 'A country'
    };
    expect(
      address(undefined, {
        type: 'UPDATE_CURRENT_ADDRESS',
        address: expectedState
      })
    ).toEqual(expectedState);
  });
});
