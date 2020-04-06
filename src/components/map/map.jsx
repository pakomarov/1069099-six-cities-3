import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {ICON_SIZE} from '../../const.js';


const Icon = {
  DEFAULT: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: ICON_SIZE,
  }),
  HIGHLIGHTED: leaflet.icon({
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
    this.markersWithId = [];
  }

  componentDidMount() {
    const {center, zoom, highlightedSiteId} = this.props;
    const containerElement = this._containerRef.current;

    this.map = getLeafletMap(containerElement, center, zoom);

    this._addMarkers();

    if (highlightedSiteId !== null) {
      this._setIconForMarkerWithId(Icon.HIGHLIGHTED, highlightedSiteId);
    }
  }

  componentDidUpdate(prevProps) {
    const {center, zoom, sites, highlightedSiteId} = this.props;

    if (center !== prevProps.center) {
      this.map.setView(center, zoom);
    }

    if (JSON.stringify(sites) !== JSON.stringify(prevProps.sites)) {
      this._removeMarkers();

      this._addMarkers();

      if (highlightedSiteId !== null) {
        this._setIconForMarkerWithId(Icon.HIGHLIGHTED, highlightedSiteId);
      }
    }

    if (highlightedSiteId !== prevProps.highlightedSiteId) {
      if (prevProps.highlightedSiteId !== null) {
        this._setIconForMarkerWithId(Icon.DEFAULT, prevProps.highlightedSiteId);
      }
      if (highlightedSiteId !== null) {
        this._setIconForMarkerWithId(Icon.HIGHLIGHTED, highlightedSiteId);
      }
    }
  }

  _addMarkers() {
    this.props.sites.forEach(({id, coords}) => {
      const marker = leaflet.marker(coords, {icon: Icon.DEFAULT});
      marker.addTo(this.map);
      this.markersWithId.push({
        id,
        marker,
      });
    });
  }

  _removeMarkers() {
    this.markersWithId.forEach(({marker})=> this.map.removeLayer(marker));
    this.markersWithId = [];
  }

  _setIconForMarkerWithId(icon, highlightId) {
    const markerWithId = this.markersWithId.find(({id}) => id === highlightId);
    if (markerWithId) {
      markerWithId.marker.setIcon(icon);
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


Map.defaultProps = {
  highlightedSiteId: null,
};


Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  sites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  highlightedSiteId: PropTypes.number,
};


export default Map;
