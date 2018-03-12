import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { updateCurrentAddress } from '../redux/actions/address';

class AddressInputMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      noLocationService: false,
      coords: undefined,
      markerPosition: undefined
    };

    this.handleMapClicked = this.handleMapClicked.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            coords: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        },
        () => {
          this.setState({ noLocationService: true });
        }
      );
    } else {
      this.setState({ noLocationService: true });
    }
  }

  handleMapClicked(mapProps, map, clickEvent) {
    const { latLng } = clickEvent;
    const lat = latLng.lat();
    const lng = latLng.lng();
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        const address = AddressInputMap.addressBuilder(
          results[0].address_components
        );
        this.props.updateCurrentAddress(address);
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
    this.setState({ markerPosition: { lat, lng } });
  }

  static addressBuilder(components) {
    var result = {
      streetNumber: '',
      route: '',
      ward: '',
      district: '',
      city: '',
      country: ''
    };
    for (const component of components) {
      for (const type of component.types) {
        switch (type) {
          case 'street_number':
            result.streetNumber = component.long_name;
            break;
          case 'route':
            result.route = component.long_name;
            break;
          case 'sublocality_level_1':
            result.ward = component.long_name;
            break;
          case 'administrative_area_level_2':
            result.district = component.long_name;
            break;
          case 'administrative_area_level_1':
            result.city = component.long_name;
            break;
          case 'country':
            result.country = component.long_name;
            break;
          default:
            break;
        }
      }
    }
    return result;
  }

  render() {
    const { noLocationService, coords, markerPosition } = this.state;

    if (!noLocationService && !coords) {
      return <div />;
    }

    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={coords}
        onClick={this.handleMapClicked}
      >
        <Marker position={markerPosition} />
      </Map>
    );
  }
}

const mapDispatchToProps = { updateCurrentAddress };

export default compose(
  GoogleApiWrapper({
    apiKey: 'AIzaSyDAslG8GCT2WQV99lrfi0yM_J4dD1Ojl30'
  }),
  connect(null, mapDispatchToProps)
)(AddressInputMap);
