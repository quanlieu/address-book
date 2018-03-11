import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../src/App';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';

describe('<App />', () => {
  test('should render Login page when there is no props.uid', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  test('should render Main page when there is props.uid', () => {
    const wrapper = shallow(<App uid={1} />);
    expect(wrapper.find(Main)).toHaveLength(1);
  });
});
