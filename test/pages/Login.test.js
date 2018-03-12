import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../../src/pages/Login';

describe('<Login />', () => {
  test('should call firebase.signInWithPopup', () => {
    const expectedProvider = { provider: 'A provider' };
    const mockSigInWithPopup = jest.fn();

    let mockAuth = () => ({ signInWithPopup: mockSigInWithPopup });
    mockAuth.GoogleAuthProvider = () => expectedProvider;

    const wrapper = shallow(<Login firebase={{ auth: mockAuth }} />);
    wrapper.instance().handleLoginClick();
    expect(mockSigInWithPopup.mock.calls[0]).toEqual([expectedProvider]);
  });
});
