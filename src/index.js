import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const PLACES_COUNT = 1221;

ReactDOM.render(
    <App
      placesCount={PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
