import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './pages/Login';
import Main from './pages/Main';

import Loading from './components/Loading';

import { getUid } from './redux/reducers/selectors';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return <div>{this.props.uid ? <Main /> : <Login />}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.load.loading,
  uid: getUid(state)
});

App.propTypes = {
  loading: PropTypes.bool,
  uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { App };
export default connect(mapStateToProps)(App);
