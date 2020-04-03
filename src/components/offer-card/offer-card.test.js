import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import OfferCard from './offer-card.jsx';


const offer = {
  id: 1,
  coords: [1, 2],
  thumbnail: `img/apartment-01.jpg`,
  isPremium: true,
  price: 120,
  title: `Beautiful luxurious apartment at great location`,
  type: OfferType.APARTMENT,
  rating: 0.1,
};


it(`Should match snapshot of OfferCard`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={offer}
      onMouseOver={() => {}}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
