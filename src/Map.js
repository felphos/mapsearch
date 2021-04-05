import React, {useState, useEffect} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

const Map = (props) => {
  const latitude = props.latitude;
  const longitude = props.longitude;
  const [style, setStyle] = useState(props.style);

  useEffect(() => {
    mapbox.accessToken =
      'pk.eyJ1IjoiZmVscGhvcyIsImEiOiJja24wa3llb2wwNzUxMnZuendxb2lib2FkIn0.bVCYhQO1_ca4-1yEtvmYiw';

    var map = new mapbox.Map({
      container: 'map',
      style: style,
      center: [longitude, latitude],
      zoom: 12,
    });

    var nav = new mapbox.NavigationControl();
    map.addControl(nav, 'top-right');
    props.changeMap(map);
  }, []);

  useEffect(() => {
    setStyle(props.style);
    if (props.map) {
      props.map.setStyle(props.style);
    }
  }, [props.style, props.map]);

  return <div id="map"></div>;
};

export default Map;
