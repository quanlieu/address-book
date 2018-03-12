import React from 'react';
import { shallow } from 'enzyme';

import { AddressInputMap } from '../../src/containers/AddressInputMap';

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

  test('should render Map', () => {
    expect(wrapper.find('Map').exists()).toBeTruthy();
  });

  test('should set marker position and updateCurrentAddress', () => {
    const clickEvent = {
      latLng: {
        lat: () => 5,
        lng: () => 10
      }
    };

    global.google = {
      maps: {
        Geocoder: () => ({
          geocode: ({}, cb) => {
            cb([{}], 'OK');
          }
        })
      }
    };

    const expectedParams = { address: 'An address' };

    const originAddressBuilder = AddressInputMap.addressBuilder;
    AddressInputMap.addressBuilder = jest.fn();
    AddressInputMap.addressBuilder.mockReturnValue(expectedParams);

    wrapper.instance().handleMapClick(null, null, clickEvent);
    const expectedMarkerPosition = wrapper.state().markerPosition;
    expect(expectedMarkerPosition).toEqual({ lat: 5, lng: 10 });
    expect(mockUpdateCurrentAddress.mock.calls[0]).toEqual([expectedParams]);

    AddressInputMap.addressBuilder = originAddressBuilder;
  });
});
