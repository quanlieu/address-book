import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import { getAddresses, getUid } from '../redux/reducers/selectors';
import AddressList from '../components/AddressList';
import AddressInput from '../components/AddressInput';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.addAddress = this.addAddress.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
  }

  handleLogoutClick() {
    this.props.firebase.auth().signOut();
  }

  addAddress(address) {
    this.props.firebase.push(`users/${this.props.uid}/addresses`, address);
  }

  deleteAddress(id) {
    this.props.firebase.remove(`users/${this.props.uid}/addresses/${id}`);
  }

  render() {
    const { addresses } = this.props;

    return (
      <div>
        Main page
        <AddressList addresses={addresses} onDelete={this.deleteAddress} />
        <AddressInput onAdd={this.addAddress} />
        <button onClick={this.handleLogoutClick}>Logout</button>
      </div>
    );
  }
}

Main.defaultProps = {
  addresses: {}
};

Main.propTypes = {
  addresses: PropTypes.object,
  firebase: PropTypes.object.isRequired,
  uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

const mapStateToProps = state => ({
  addresses: getAddresses(state),
  uid: getUid(state)
});

export default compose(firebaseConnect(), connect(mapStateToProps))(Main);
