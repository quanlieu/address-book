import React from 'react';
import PropTypes from 'prop-types';
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

    this.handleMapClick = this.handleMapClick.bind(this);
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

  handleMapClick(e) {}

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

    return <div>Placeholder for map</div>;
  }
}

const mapDispatchToProps = { updateCurrentAddress };

export { AddressInputMap };
export default connect(null, mapDispatchToProps)(AddressInputMap);
