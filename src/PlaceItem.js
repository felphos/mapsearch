import mapbox from 'mapbox-gl';

const PlaceItem = (props) => {
  const place = props.place;
  const map = props.map;

  if (map) {
    const popup = new mapbox.Popup({
      closeButton: false,
    });
    popup.setHTML(place.name);

    const marker = new mapbox.Marker({
      color: '#2727e6',
    });
    marker.setLngLat([place.longitude, place.latitude]);
    marker.setPopup(popup);
    marker.addTo(map);
  }
  function goTo() {
    map.flyTo({center: [place.longitude, place.latitude], zoom: 17});
  }

  return (
    <div className="place-item" onClick={() => goTo()}>
      {place.name}
    </div>
  );
};

export default PlaceItem;
