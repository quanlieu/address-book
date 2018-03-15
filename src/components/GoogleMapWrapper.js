import React from 'react';
import PropTypes from 'prop-types';

import loadGoogleMapApi from '../utils/loadGoogleMapApi';

class GoogleMapWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loadMap = this.loadMap.bind(this);
    this.map = undefined;
    this.marker = undefined;
    this.infoWindow = undefined;
  }

  componentDidMount() {
    loadGoogleMapApi(this.props.mapApiKey, this.loadMap);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.startPosition !== this.props.startPosition &&
      (this.map && this.marker)
    ) {
      this.map.setCenter(nextProps.startPosition);
      this.marker.setPosition(nextProps.startPosition);
    }
  }

  loadMap() {
    const { startPosition } = this.props;
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: startPosition
    });
    this.marker = new google.maps.Marker({
      position: startPosition,
      map: this.map
    });
    this.infoWindow = new google.maps.InfoWindow({
      content: 'No result'
    });
    google.maps.event.addListener(this.map, 'click', e => {
      this.reverseGeoCoding(e.latLng);
      this.marker.setPosition(e.latLng);
    });
  }

  reverseGeoCoding(location) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location }, (results, status) => {
      if (status === 'OK') {
        this.props.onInput(results[0].address_components);
        this.infoWindow.close();
      } else {
        this.infoWindow.open(this.map, this.marker);
      }
    });
  }

  render() {
    const { className } = this.props;
    return <div id="map" className={className} />;
  }
}

GoogleMapWrapper.propTypes = {
  startPosition: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  mapApiKey: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired
};

GoogleMapWrapper.defaultProps = {
  className: 'google-map-wrapper',
  startPosition: { lat: 10.8231, lng: 106.6297 }
};

export default GoogleMapWrapper;
