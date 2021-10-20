import {useEffect, useState} from "react";
import apiUtils from "../utils/api";
// components
import {Alert} from "@mui/material";
import Loader from "../components/Loader";
import Map from "../components/Map";

function ChargersForm() {
  /**
   * Gets the location of the user and retrieves data from api
   */
  const initApp = () => {
    setFetchInProgress(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        retrieveChargers(position.coords);
        setUserCoords(position.coords);
      },
      () => {
        setError(
        'Error retrieving your location. Please make sure you provided location access permission and then refresh this page'
        );
        setFetchInProgress(false);
      },
    );
  };

  useEffect(initApp,[]);

  const [error, setError] = useState('');
  const [chargers, setChargers] = useState([]);
  const [fetchInProgress, setFetchInProgress] = useState(false);
  const [userCoords, setUserCoords] = useState(null);


  /**
   * Retrieves chargers data from api
   * @param {Object} coords - object with coordinates from getCurrentPosition
   * @return {Promise}
   */
  const retrieveChargers = async (coords) => {
    try {
      const response = await apiUtils.getChargers(coords.latitude, coords.longitude)
      setChargers(response);
    } catch {
      setError('Error retrieving chargers, try again later');
    }
    setFetchInProgress(false);
  }

  /**
   * Returns an array with formatted chargers data for the Map component
   * @return {Array}
   */
  const getChargerMapLocations = () => chargers.map((charger) => ({
    chargerId: charger?.ID,
    name: charger?.AddressInfo.Title,
    location: {
      lat: charger?.AddressInfo.Latitude,
      lng: charger?.AddressInfo.Longitude,
    }
  }));

  return (
    <>
      <h1>Chargers Near You (10km range)</h1>
      {error ?
        <Alert severity="error">{error}</Alert>
      :
        <>
          <h2>Please select a charger from the map</h2>
          <Map
            defaultLat={userCoords?.latitude}
            defaultLng={userCoords?.longitude}
            locations={getChargerMapLocations()}
          />
        </>
      }
      <Loader open={fetchInProgress}/>
    </>
  );
}

export default ChargersForm;
