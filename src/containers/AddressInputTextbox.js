import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { updateCurrentAddress } from '../redux/actions/address';

class AddressInputTextbox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { street: '', ward: '', district: '', city: '', country: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      streetNumber,
      route,
      ward,
      district,
      city,
      country
    } = nextProps.address;

    this.setState({
      street: streetNumber + ' ' + route,
      ward,
      district,
      city,
      country
    });
  }

  handleInput(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleClickAdd(e) {
    if (!AddressInputTextbox.validateAddressInput(this.state)) {
      return;
    }
    const { street, ward, district, city, country } = this.state;
    this.props.onAdd({ street, ward, district, city, country });
    this.setState({
      street: '',
      ward: '',
      district: '',
      city: '',
      country: ''
    });
  }

  static validateAddressInput({ street, ward, district, city, country }) {
    if (street && (city || (ward && district))) {
      return true;
    }

    return false;
  }

  render() {
    const { street, ward, district, city, country } = this.state;

    return (
      <div className="address-input">
        <input
          className="address-input__text-box"
          type="text"
          placeholder="street"
          name="street"
          value={street}
          onChange={this.handleInput}
        />
        <input
          className="address-input__text-box"
          type="text"
          placeholder="ward"
          name="ward"
          value={ward}
          onChange={this.handleInput}
        />
        <input
          className="address-input__text-box"
          type="text"
          placeholder="district"
          name="district"
          value={district}
          onChange={this.handleInput}
        />
        <input
          className="address-input__text-box"
          type="text"
          placeholder="city"
          name="city"
          value={city}
          onChange={this.handleInput}
        />
        <input
          className="address-input__text-box"
          type="text"
          placeholder="country"
          name="country"
          value={country}
          onChange={this.handleInput}
        />
        <button
          className="address-input__submit btn"
          onClick={this.handleClickAdd}
        >
          Add
        </button>
        <div className="address-input__note">
          (You can fill the textboxes above or click the map to fill for you. In
          case of testboxes, street is required and you must fill either ward -
          district or city)
        </div>
      </div>
    );
  }
}

AddressInputTextbox.propTypes = {
  onAdd: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ address: state.address });

const mapDispatchToProps = { updateCurrentAddress };

export default connect(mapStateToProps, mapDispatchToProps)(
  AddressInputTextbox
);
