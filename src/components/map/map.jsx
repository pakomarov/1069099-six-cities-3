import React, {memo} from 'react';
import PropTypes from 'prop-types';
import withMapLogic from '../../hocs/with-map-logic/with-map-logic.js';


const Map = ({containerRef}) => {
  return (
    <div
      ref={containerRef}
      id="map"
      style={{width: `100%`, height: `100%`}}
    ></div>
  );
};


Map.propTypes = {
  containerRef: PropTypes.any.isRequired,
};


export {Map};
export default withMapLogic(memo(Map));
