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
      <div className="login">
        <div className="login__title">Cloud address book</div>
        <button className="login__btn btn" onClick={this.handleLoginClick}>
          LOGIN WITH GOOGLE
        </button>
        <div className="login__note">
          (Please allow us to know your location when the browser asks for
          better experience)
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export { Login };
export default firebaseConnect()(Login);
