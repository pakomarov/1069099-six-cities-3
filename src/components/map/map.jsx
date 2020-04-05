import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {ICON_SIZE} from '../../const.js';


const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE,
});


const getLeafletMap = (container, center, zoom) => {
  const map = leaflet.map(container, {
    center,
    zoom,
    zoomControl: false,
    marker: true,
  });

  leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  })
  .addTo(map);

  return map;
};

const addMarkerToMap = (siteCoords, map) => {
  leaflet.marker(siteCoords, {icon})
  .addTo(map);
};


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._containerRef = createRef();
  }

  componentDidMount() {
    const {center, zoom, sites} = this.props;
    const containerElement = this._containerRef.current;

    const map = getLeafletMap(containerElement, center, zoom);
    sites.forEach((coords) => addMarkerToMap(coords, map));
  }

  render() {
    return (
      <div
        ref={this._containerRef}
        id="map"
        style={{width: `100%`, height: `100%`}}
      ></div>
    );
  }
}


Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  sites: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
  ),
};


export default Map;
