import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';


it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      place={`Some place somewhere`}
      onCardNameClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
