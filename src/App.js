import React from 'react';
import { connect } from 'react-redux';

import Login from './pages/Login';
import Main from './pages/Main';

import { getUid } from './redux/reducers/selectors';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.uid ? <Main /> : <Login />}</div>;
  }
}

const mapStateToProps = state => ({
  uid: getUid(state)
});

export default connect(mapStateToProps)(App);
