import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../../src/pages/Login';

describe('<Login />', () => {
  test('should call sign in from firebase', () => {
    const expectedProvider = { provider: 'A provider' };
    const mockSigInWithPopup = jest.fn();

    let auth = () => ({ signInWithPopup: mockSigInWithPopup });
    auth.GoogleAuthProvider = () => expectedProvider;

    const wrapper = shallow(<Login firebase={{ auth }} />);
    wrapper.instance().handleLoginClick();
    expect(mockSigInWithPopup.mock.calls[0]).toEqual([expectedProvider]);
  });
});
