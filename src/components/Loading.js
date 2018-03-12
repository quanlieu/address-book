import React from 'react';

import loadingGear from '../images/loading-gears.gif';

class Loading extends React.PureComponent {
  render() {
    return (
      <div>
        <img className="loading__gear" src={loadingGear} />
      </div>
    );
  }
}

export default Loading;
