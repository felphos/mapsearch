import React, {useState, useEffect} from 'react';
import './PlacesPanel.css';
import PlaceItem from './PlaceItem';

const PlacesPanel = (props) => {
  const [places, setPlaces] = useState(props.places);

  let placeItems = <div className="no-results">Nothing added yet</div>;

  if (places.length > 0) {
    placeItems = places.map((place, index) => {
      return <PlaceItem key={index} map={props.map} place={place} />;
    });
  }

  useEffect(() => {
    if (places) {
      setPlaces(props.places);
    }
  }, [props.places, places]);

  return <div className="places">{placeItems}</div>;
};

export default PlacesPanel;
