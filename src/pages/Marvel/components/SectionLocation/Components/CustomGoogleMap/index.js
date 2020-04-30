import Map, { GoogleApiWrapper } from "google-maps-react";
import { geolocated } from "react-geolocated";
import React from "react";

export const CustomGoogleMap = (props) => {
  const mapStyles = {
    width: props.mapWidth,
    height: props.mapHeight,
  };

  const defaultProps = {
    center: {
      lat: 47.83918,
      lng: 35.122242,
    },
    zoom: 14,
  };

  return (
    <div className="location">
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={defaultProps.center}
      />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 1000,
})(
  GoogleApiWrapper({
    apiKey: "AIzaSyDjIKv60uxhDYT5Revk8JT9n8DNa16RO2Q",
  })(CustomGoogleMap)
);
