import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';


const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `bruh`,
  `bar`,
  `fooz`,
  `baz`
];


it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      places={PLACES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
