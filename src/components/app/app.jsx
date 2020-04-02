import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';


const handleOfferTitleClick = () => {};


const renderApp = (offers) => {
  return (
    <Main
      offers={offers}
      onOfferTitleClick={handleOfferTitleClick}
    />
  );
};

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp(offers)}
        </Route>
        <Route exact path="/dev-main">
          <Main
            offers={offers}
            onOfferTitleClick={handleOfferTitleClick}
          />
        </Route>
        <Route exact path="/dev-offer">
          <Offer
            offer={offers[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  offers: PropTypes.array.isRequired,
};


export default App;
