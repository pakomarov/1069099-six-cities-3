import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';
import reviews from './mocks/reviews.js';
import nearbyOffers from './mocks/nearby-offers.js';
import App from './components/app/app.jsx';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
        nearbyOffers={nearbyOffers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
