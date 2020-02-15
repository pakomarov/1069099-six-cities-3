import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `bruh`,
  `bar`,
  `fooz`,
  `baz`,
];

ReactDOM.render(
    <App
      places={PLACES}
    />,
    document.querySelector(`#root`)
);
