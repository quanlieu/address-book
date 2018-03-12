import address from '../../src/redux/reducers/address';
import load from '../../src/redux/reducers/load';

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

describe('Loading reducers', () => {
  test('should return loading false', () => {
    expect(load(undefined, { type: 'Wrong type' })).toEqual({ loading: false });
    expect(
      load(undefined, { type: '@@reactReduxFirebase/SET_PROFILE' })
    ).toEqual({ loading: false });
  });
  test('should return loading true', () => {
    expect(load(undefined, { type: '@@reactReduxFirebase/LOGIN' })).toEqual({
      loading: true
    });
  });
});
