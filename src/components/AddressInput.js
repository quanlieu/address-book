import React from 'react';
import PropTypes from 'prop-types';

class AddressList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { street: '', ward: '', district: '', city: '', country: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleClickAdd(e) {
    if (!AddressList.validateAddressInput(this.state)) {
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
      <div>
        <input
          type="text"
          placeholder="street"
          name="street"
          value={street}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="ward"
          name="ward"
          value={ward}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="district"
          name="district"
          value={district}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="city"
          name="city"
          value={city}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={this.handleInput}
        />
        <button onClick={this.handleClickAdd}>Add</button>
      </div>
    );
  }
}

AddressList.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddressList;
