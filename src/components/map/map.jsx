import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {ICON_SIZE} from '../../const.js';


const Icon = {
  DEFAULT: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: ICON_SIZE,
  }),
  ACTIVE: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: ICON_SIZE
  })
};

const TileLayer = {
  URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  OPTIONS: {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  },
};


const getLeafletMap = (container, center, zoom) => {
  const map = leaflet.map(container, {
    center,
    zoom,
    zoomControl: false,
    marker: true,
  });

  leaflet.tileLayer(TileLayer.URL, TileLayer.OPTIONS).addTo(map);

  return map;
};


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._containerRef = createRef();

    this.map = null;

    this.markers = [];
  }

  componentDidMount() {
    const {center, zoom, sites} = this.props;
    const containerElement = this._containerRef.current;

    this.map = getLeafletMap(containerElement, center, zoom);

    sites.forEach((coords) => {
      const marker = leaflet.marker(coords, {icon: Icon.DEFAULT});
      this.markers.push(marker);
      marker.addTo(this.map);
    });
  }

  componentDidUpdate(prevProps) {
    const {center, zoom, sites} = this.props;

    if (center !== prevProps.center) {
      this.map.setView(center, zoom);
    }

    if (JSON.stringify(sites) !== JSON.stringify(prevProps.sites)) {
      this.markers.forEach((marker)=> this.map.removeLayer(marker));
      this.markers = [];

      sites.forEach((coords) => {
        const marker = leaflet.marker(coords, {icon: Icon.DEFAULT});
        this.markers.push(marker);
        marker.addTo(this.map);
      });
    }
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
  sites: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};


export default Map;
