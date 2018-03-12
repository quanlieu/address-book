import React from 'react';
import { shallow } from 'enzyme';

import { Main } from '../../src/pages/Main';

describe('<Main />', () => {
  const mockFirebaseSignOut = jest.fn();
  const mockFirebasePush = jest.fn();
  const mockFirebaseRemove = jest.fn();
  const mockUid = 123;
  const mockUidRegex = /123/;

  const mockFirebase = {
    push: mockFirebasePush,
    auth: () => ({ signOut: mockFirebaseSignOut }),
    remove: mockFirebaseRemove
  };

  const wrapper = shallow(<Main firebase={mockFirebase} uid={mockUid} />);
  const instance = wrapper.instance();

  test('should call firebase.signOut', () => {
    instance.handleLogoutClick();
    expect(mockFirebaseSignOut.mock.calls.length).toEqual(1);
  });

  test('should call firebase.push', () => {
    const expectedAddress = { address: 'An address' };
    instance.addAddress(expectedAddress);
    expect(mockFirebasePush.mock.calls[0][0]).toMatch(mockUidRegex);
    expect(mockFirebasePush.mock.calls[0][1]).toEqual(expectedAddress);
  });

  test('should call firebase.remove', () => {
    const expectedId = 456;
    const expectedIdRegex = /456/;

    instance.deleteAddress(expectedId);
    expect(mockFirebaseRemove.mock.calls[0][0]).toMatch(mockUidRegex);
    expect(mockFirebaseRemove.mock.calls[0][0]).toMatch(expectedIdRegex);
  });
});
