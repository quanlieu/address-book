import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import { getAddresses } from '../redux/reducers/selectors';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    this.props.firebase.auth().signOut();
  }

  render() {
    const { addresses } = this.props;

    return (
      <div>
        Main page
        {addresses && addresses.map((v, k) => <div key={k}>{v}</div>)}
        <button onClick={this.handleLogoutClick}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addresses: getAddresses(state)
});

export default compose(firebaseConnect(), connect(mapStateToProps))(Main);
