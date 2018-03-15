import React from 'react';
import { shallow } from 'enzyme';

import { AddressInputMap } from '../../src/containers/AddressInputMap';
import GoogleMapWrapper from '../../src/components/GoogleMapWrapper';

describe('<AddressInputMap />', () => {
  const mockUpdateCurrentAddress = jest.fn();
  const wrapper = shallow(
    <AddressInputMap updateCurrentAddress={mockUpdateCurrentAddress} />
  );

  test('should build address correctly', () => {
    const input = [
      { long_name: '72', types: ['street_number'] },
      { long_name: 'Tran Van Giap', types: ['route'] },
      { long_name: 'Phu Thanh', types: ['political', 'sublocality_level_1'] },
      { long_name: 'Tan Phu', types: ['administrative_area_level_2'] },
      { long_name: 'Ho Chi Minh', types: ['administrative_area_level_1'] },
      { long_name: 'Vietnam', types: ['country'] }
    ];
    const expected = {
      streetNumber: '72',
      route: 'Tran Van Giap',
      ward: 'Phu Thanh',
      district: 'Tan Phu',
      city: 'Ho Chi Minh',
      country: 'Vietnam'
    };
    expect(AddressInputMap.addressBuilder(input)).toEqual(expected);
  });

  test('should render GoogleMapWrapper', () => {
    expect(wrapper.find(GoogleMapWrapper).exists()).toBeTruthy();
  });

  test('should call updateCurrentAddress', () => {
    AddressInputMap.addressBuilder = jest.fn();
    wrapper.instance().handleMapClick();
    expect(mockUpdateCurrentAddress.mock.calls.length).toBe(1);
  });
});
