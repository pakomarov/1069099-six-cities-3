import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import NearbyOfferList from './nearby-offer-list.jsx';


const offers = [
  {
    id: 1,
    thumbnail: `img/apartment-01.jpg`,
    price: 120,
    title: `Beautiful luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    rating: 0.1,
  }, {
    id: 2,
    thumbnail: `img/room.jpg`,
    price: 80,
    title: `Wood and stone place`,
    type: OfferType.ROOM,
    rating: 1.3,
  }, {
    id: 3,
    thumbnail: `img/apartment-02.jpg`,
    price: 123,
    title: `Canal View Prinsengracht`,
    type: OfferType.HOUSE,
    rating: 3.6,
  }, {
    id: 4,
    thumbnail: `img/apartment-03.jpg`,
    price: 9999,
    title: `Nice, cozy, warm big bed apartment`,
    type: OfferType.HOTEL,
    rating: 4.87,
  }
];


it(`Should match snapshot of NearbyOfferList`, () => {
  const tree = renderer
    .create(<NearbyOfferList
      nearbyOffers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
