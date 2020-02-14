import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';


const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `bruh`,
  `bar`,
  `fooz`,
  `baz`,
];


it(`Should match snapshot of Main`, () => {
  const tree = renderer
    .create(<Main
      places={PLACES}
      onCardNameClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
