import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import NearbyOffer from './nearby-offer.jsx';


const offer = {
  thumbnail: `img/apartment-01.jpg`,
  price: 120,
  rating: 0.1,
  title: `Beautiful luxurious apartment at great location`,
  type: OfferType.APARTMENT,
};


it(`Should match snapshot of NearbyOffer`, () => {
  const tree = renderer
    .create(<NearbyOffer
      nearbyOffer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
