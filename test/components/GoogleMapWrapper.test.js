import React from 'react';
import { shallow } from 'enzyme';

import GoogleMapWrapper from '../../src/components/GoogleMapWrapper';

describe('<GoogleMapWrapper />', () => {
  const mockOnClick = jest.fn();
  const mockMapApiKey = 'keykey';
  const mockStartposition = { lat: 20, lng: 30 };
  const wrapper = shallow(
    <GoogleMapWrapper onClick={mockOnClick} mapApiKey={mockMapApiKey} />
  );
  const instance = wrapper.instance();
  const mapTag = document.getElementById('map');
  const mockMap = jest.fn();
  const mockMarker = jest.fn();
  const mockInfoWindow = jest.fn();
  const mockGeocoder = jest.fn();
  const mockAddListener = jest.fn();

  global.google = {
    maps: {
      Map: mockMap,
      Marker: mockMarker,
      InfoWindow: mockInfoWindow,
      Geocoder: () => ({ geocode: mockGeocoder }),
      event: {
        addListener: mockAddListener
      }
    }
  };

  test('should render a tag with id=map', () => {
    expect(wrapper.find('#map').exists()).toBeTruthy();
  });

  test('should load google map and set marker', () => {
    instance.loadMap();
    expect(mockMap.mock.calls.length).toBeTruthy();
    expect(mockMarker.mock.calls.length).toBeTruthy();
    expect(mockInfoWindow.mock.calls.length).toBeTruthy();
    expect(mockAddListener.mock.calls.length).toBeTruthy();
  });

  test('should invoke geocoder', () => {
    instance.reverseGeoCoding();
    expect(mockGeocoder.mock.calls.length).toBeTruthy();
  });

  test('should re-set map center and mark position', () => {
    const mockSetCenter = jest.fn();
    const mocksetPosition = jest.fn();
    const mockNextProp = {
      startPosition: { lat: 50, lng: 30 }
    };
    instance.map = {
      setCenter: mockSetCenter
    };
    instance.marker = {
      setPosition: mocksetPosition
    };

    wrapper.setProps(mockNextProp);
    expect(mockSetCenter.mock.calls[0][0]).toEqual(mockNextProp.startPosition);
    expect(mocksetPosition.mock.calls[0][0]).toEqual(
      mockNextProp.startPosition
    );
  });
});
