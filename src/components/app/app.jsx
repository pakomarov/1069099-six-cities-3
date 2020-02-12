import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';


const App = ({places}) => {
  return (
    <Main
      places={places}
    />
  );
};


App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};


export default App;
