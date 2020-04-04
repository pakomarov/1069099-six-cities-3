import React from 'react';
import ReactDOM from 'react-dom';
import offers from './mocks/offers.js';
import reviews from './mocks/reviews.js';
import nearbyOffers from './mocks/nearby-offers.js';
import App from './components/app/app.jsx';


ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
      nearbyOffers={nearbyOffers}
    />,
    document.querySelector(`#root`)
);
