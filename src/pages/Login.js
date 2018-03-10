import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick(e) {
    this.props.login();
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

const mapStateToProps = (state = {}) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
