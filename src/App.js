import React, {useState} from 'react';
import './App.css';
import Map from './Map';
import Search from './Search';
import PlacesPanel from './PlacesPanel';
import Toggler from './Toggler';

function App() {
  const [map, setMap] = useState(null);
  const latitude = 52.0786;
  const longitude = 4.2887;
  const [style, setStyle] = useState(
    'mapbox://styles/mapbox/satellite-streets-v11'
  );
  const [places, setPlaces] = useState([]);

  const changeMap = (map) => {
    setMap(map);
  };

  const changeStyle = (url) => {
    setStyle(url);
  };

  const addPlaces = (place, latitude, longitude) => {
    setPlaces([
      ...places,
      {name: place, latitude: latitude, longitude: longitude},
    ]);
  };

  return (
    <div className="App">
      <Search addPlaces={addPlaces} latitude={latitude} longitude={longitude} />
      <PlacesPanel map={map} places={places} />
      <Toggler changeStyle={changeStyle} style={style} />
      <Map
        map={map}
        changeMap={changeMap}
        latitude={latitude}
        longitude={longitude}
        style={style}
      />
    </div>
  );
}

export default App;
