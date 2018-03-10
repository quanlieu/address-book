import React from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick(e) {
    const { firebase } = this.props;
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div>
        Login page
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default firebaseConnect()(Login);
