import React from 'react';
import { shallow } from 'enzyme';

import { AddressInputTextbox } from '../../src/containers/AddressInputTextbox';

describe('<AddressInputTextbox />', () => {
  const mockOnAdd = jest.fn();
  const wrapper = shallow(<AddressInputTextbox onAdd={mockOnAdd} />);

  test('should validate input correctly', () => {
    const mockValidAddress = {
      street: '123 Street',
      city: 'A city',
      country: 'A country'
    };

    const mockInvalidAddress = {
      street: '123 Street',
      ward: 'A ward',
      country: 'A country'
    };

    expect(AddressInputTextbox.validateAddressInput(mockValidAddress))
      .toBeTruthy;
    expect(AddressInputTextbox.validateAddressInput(mockInvalidAddress))
      .toBeFalsy;
  });

  test('should render five textbox', () => {
    expect(wrapper.find('input')).toHaveLength(5);
  });

  test('should set state by target name', () => {
    const mockStreet = { name: 'street', value: 'mock street' };
    wrapper.instance().handleInput({ currentTarget: mockStreet });
    const newState = wrapper.state();
    expect(newState.street).toEqual(mockStreet.value);
  });

  test('should get props and then set state correctly', () => {
    const nextProps = {
      address: {
        streetNumber: '123',
        route: 'A Route',
        ward: 'A ward',
        district: 'A district',
        city: 'A city',
        country: 'A country'
      }
    };
    const expectedState = {
      street: '123 A Route',
      ward: 'A ward',
      district: 'A district',
      city: 'A city',
      country: 'A country'
    };
    wrapper.setProps(nextProps);
    expect(wrapper.state()).toEqual(expectedState);
  });

  test('should call onAdd with specified state', () => {
    const originValidateAddressInput = AddressInputTextbox.validateAddressInput;
    const expectedState = {
      street: '123 A Route',
      ward: 'A ward',
      district: 'A district',
      city: 'A city',
      country: 'A country'
    };

    AddressInputTextbox.validateAddressInput = jest.fn();
    AddressInputTextbox.validateAddressInput.mockReturnValue(true);
    wrapper.setState(expectedState);
    wrapper.instance().handleClickAdd();
    expect(mockOnAdd.mock.calls[0]).toEqual([expectedState]);
    AddressInputTextbox.validateAddressInput = originValidateAddressInput;
  });
});
