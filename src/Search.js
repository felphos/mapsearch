import React, {useState} from 'react';
import './Search.css';

const Search = (props) => {
  const [searchPlace, setSearchPlace] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const {value} = event.target;
    setSearchPlace(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const accessToken =
      'pk.eyJ1IjoiZmVscGhvcyIsImEiOiJja24wa3llb2wwNzUxMnZuendxb2lib2FkIn0.bVCYhQO1_ca4-1yEtvmYiw';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchPlace}.json?proximity=${props.longitude},${props.latitude}&access_token=${accessToken}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data.features.length) {
          console.log(`Nothing found for ${searchPlace}`);
          // setLoading(false);
          return;
        }

        const firstResult = data.features[0];
        const latitude = firstResult.center[1];
        const longitude = firstResult.center[0];

        props.addPlaces(searchPlace, latitude, longitude);
        setSearchPlace('');
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          value={searchPlace}
          onChange={handleChange}
          placeholder="Add place..."
        />
      </form>
    </div>
  );
};

export default Search;
