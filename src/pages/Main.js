import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick(e) {
    this.props.logout();
  }

  render() {
    return (
      <div>
        Main page
        <button onClick={this.handleLogoutClick}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
