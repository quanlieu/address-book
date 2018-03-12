import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import { getAddresses, getUid } from '../redux/reducers/selectors';
import AddressList from '../components/AddressList';
import AddressInputTextbox from '../containers/AddressInputTextbox';
import AddressInputMap from '../containers/AddressInputMap';

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
      <div className="main">
        <div className="main__title">Contact list</div>
        <button className="btn main__logout" onClick={this.handleLogoutClick}>
          Logout
        </button>
        <AddressList addresses={addresses} onDelete={this.deleteAddress} />
        <AddressInputTextbox onAdd={this.addAddress} />
        <AddressInputMap />
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

export { Main };
export default compose(firebaseConnect(), connect(mapStateToProps))(Main);
