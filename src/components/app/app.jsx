import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';


const cardNameClickHandler = () => {};


const App = ({places}) => {
  return (
    <Main
      places={places}
      onCardNameClick={cardNameClickHandler}
    />
  );
};


App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
};


export default App;
