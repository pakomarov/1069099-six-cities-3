import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';


it(`Should match snapshot of PlaceCard`, () => {
  const tree = renderer
    .create(<OfferCard
      place={`Some place somewhere`}
      onCardNameClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
