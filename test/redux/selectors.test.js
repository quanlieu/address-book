import { getUid, getAddresses } from '../../src/redux/reducers/selectors';

describe('Selectors', () => {
  const testUid = 'Test uid';
  const testAddresses = ['Fortress of solitude', 'Watch Tower'];
  let testState = {
    firebase: {
      auth: { uid: testUid },
      profile: { addresses: testAddresses }
    }
  };

  test('should return uid', () => {
    expect(getUid(testState)).toEqual(testUid);
  });

  test('should return addresses', () => {
    expect(getAddresses(testState)).toEqual(testAddresses);
  });

  test('should return undefined when empty', () => {
    testState.firebase.profile.isEmpty = true;
    expect(getAddresses(testState)).toBeFalsy();
  });
});
