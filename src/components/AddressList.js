import React from 'react';
import PropTypes from 'prop-types';

class AddressList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(e) {
    this.props.onDelete(e.currentTarget.dataset.id);
  }

  render() {
    const { addresses } = this.props;
    return (
      <div className="address-list">
        {Object.keys(addresses).map(v => {
          const { street, ward, district, city, country } = addresses[v];
          return (
            <div className="address-list__row" key={v}>
              <div className="address-list__cell">
                <b>{street}</b>
              </div>
              <div className="address-list__cell">{ward}</div>
              <div className="address-list__cell">{district}</div>
              <div className="address-list__cell">{city}</div>
              <div className="address-list__cell">{country}</div>
              <button
                className="address-list__delete btn"
                data-id={v}
                onClick={this.handleDeleteClick}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

AddressList.defaultProps = {
  addresses: {}
};

AddressList.propTypes = {
  addresses: PropTypes.object,
  onDelete: PropTypes.func.isRequired
};

export default AddressList;
