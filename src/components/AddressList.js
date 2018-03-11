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
      <div>
        {Object.keys(addresses).map(v => {
          const { street, ward, district, city, country } = addresses[v];
          return (
            <div key={v}>
              {street} {ward} {district} {city} {country}
              <button data-id={v} onClick={this.handleDeleteClick}>
                Delete
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
