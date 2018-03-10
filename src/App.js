import React from 'react';
import { connect } from 'react-redux';

import Login from './pages/Login';
import Main from './pages/Main';
import { logIn, logOut } from './redux/actions/auth';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.authenticated ? <Main /> : <Login />}</div>;
  }
}

const mapStateToProps = (state = {}) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(App);
