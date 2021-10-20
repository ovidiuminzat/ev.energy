import {useState} from "react";
import PropTypes from 'prop-types';
// utils
import apiUtils from "../utils/api";
// components
import {GoogleMap, InfoWindow, LoadScript, Marker} from "@react-google-maps/api";
import {Button} from "@mui/material";

/**
 * Map component
 *
 * @param {Number} defaultLat - latitude coordinate used for centering the map
 * @param {Number} defaultLng - longitude coordinate used for centering the map
 * @param {Array} locations - array with locations data
 * @return {JSX.Element}
 */
function Map({defaultLat, defaultLng, locations}) {
  const [selectedMarker, setSelectedMarker] = useState({});

  const mapStyles = {
    height: '400px',
    width: '600px',
  };
  const defaultCenter = {
    lat: defaultLat,
    lng: defaultLng,
  };

  /**
   * Function that returns an array with the markers to be rendered on top of the map
   * @return {Array}
   */
  const renderMarkers = () => locations.map(marker => (
    <Marker
      key={marker.name}
      position={marker.location}
      onClick={() => setSelectedMarker(marker)}
    />
  ));

  /**
   * Render the info window for the selected charger
   * @return {JSX.Element}
   */
  const renderInfoWindow = () => (
    <InfoWindow
      position={selectedMarker.location}
      clickable={true}
      onCloseClick={() => setSelectedMarker({})}
    >
      <>
        <p>
          {selectedMarker.name}
        </p>
        <Button
          onClick={() => apiUtils.startCharging(selectedMarker.chargerId)}
          variant="contained"
        >
          Start Charging
        </Button>
      </>
    </InfoWindow>
  );

  return (
    <LoadScript googleMapsApiKey={'AIzaSyAp_9EFcsr9kZONWf6509Lii3NRg2mj5sw'}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {renderMarkers()}
        {selectedMarker.location && renderInfoWindow()}
      </GoogleMap>
    </LoadScript>
  );
}

Map.propTypes = {
  defaultLat: PropTypes.number,
  defaultLng: PropTypes.number,
  locations: PropTypes.array,
};

Map.defaultProps = {
  defaultLat: 0,
  defaultLng: 0,
  locations: [],
};

export default Map;
