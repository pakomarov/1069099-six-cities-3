import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';


const handleOfferTitleClick = () => {};


const App = ({offers}) => {
  return (
    <Main
      offers={offers}
      onOfferTitleClick={handleOfferTitleClick}
    />
  );
};


App.propTypes = {
  offers: PropTypes.array.isRequired,
};


export default App;
