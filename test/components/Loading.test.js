import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../src/components/Loading';

describe('<Loading />', () => {
  test('should render an image', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
