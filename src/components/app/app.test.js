import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';


const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `bruh`,
  `bar`,
  `fooz`,
  `baz`
];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      places={PLACES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
