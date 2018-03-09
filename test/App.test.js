import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';
import Example from '../src/containers/Example';

describe('<App />', () => {
  test('should renders calendar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Example)).toHaveLength(1);
  });
});
