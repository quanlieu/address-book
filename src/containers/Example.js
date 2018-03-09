import React from 'react';
import { connect } from 'react-redux';
import { appReady } from '../redux/actions/app';

class Example extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.appReady();
    }, 2000);
  }

  render() {
    console.log(this.props.isAppReady);
    return (
      <div className="red">
        {this.props.isAppReady ? 'The app is ready' : 'Waiting for the app'}
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => ({
  isAppReady: state.app.isAppReady
});

const mapDispatchToProps = { appReady };

export default connect(mapStateToProps, mapDispatchToProps)(Example);
