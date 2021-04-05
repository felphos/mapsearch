import './Toggler.css';

const Toggler = (props) => {
  const mapStyles = [
    {name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-streets-v11'},
    {name: 'Light', url: 'mapbox://styles/mapbox/light-v10'},
    {name: 'Dark', url: 'mapbox://styles/mapbox/dark-v10'},
  ];

  const buttons = mapStyles.map((style, index) => {
    let className = '';

    if (style.url === props.style) {
      className = 'selected';
    }

    return (
      <button
        className={className}
        key={index}
        onClick={() => props.changeStyle(style.url)}
      >
        {style.name}
      </button>
    );
  });

  return <div className="toggler">{buttons}</div>;
};

export default Toggler;
