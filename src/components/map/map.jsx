import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {ZOOM, ICON_SIZE} from '../../const.js';


const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE,
});


const getLeafletMap = (container, area) => {
  const map = leaflet.map(container, {
    center: area,
    zoom: ZOOM,
    zoomControl: false,
    marker: true
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
    const {area, sites} = this.props;
    const containerElement = this._containerRef.current;

    const map = getLeafletMap(containerElement, area);
    sites.forEach((marker) => addMarkerToMap(marker, map));
  }

  render() {
    return (
      <section className="cities__map map">
        <div
          ref={this._containerRef}
          id="map"
          style={{width: `100%`, height: `100%`}}
        ></div>
      </section>
    );
  }
}


Map.propTypes = {
  area: PropTypes.arrayOf(PropTypes.number),
  sites: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
  ),
};


export default Map;
