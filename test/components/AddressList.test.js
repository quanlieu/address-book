import React from 'react';
import { shallow } from 'enzyme';

import AddressList from '../../src/components/AddressList';

describe('<AddressList />', () => {
  const addresses = {
    abc: {},
    def: {},
    ghk: {}
  };
  const mockOnDelete = jest.fn();
  const wrapper = shallow(
    <AddressList addresses={addresses} onDelete={mockOnDelete} />
  );
  const testId = 'whatever';

  test('should render all the addresses from props', () => {
    expect(wrapper.find('.address-list__row')).toHaveLength(3);
  });

  test('should exucute callback with id in dataset', () => {
    wrapper
      .instance()
      .handleDeleteClick({ currentTarget: { dataset: { id: testId } } });
    expect(mockOnDelete).toBeCalledWith(testId);
  });
});
