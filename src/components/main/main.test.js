import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import Main from './main.jsx';


const offers = [
  {
    id: 1,
    picture: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    title: `Beautiful luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    rating: 0.1,
  }, {
    id: 2,
    picture: `img/room.jpg`,
    isPremium: false,
    price: 80,
    title: `Wood and stone place`,
    type: OfferType.ROOM,
    rating: 1.3,
  }, {
    id: 3,
    picture: `img/apartment-02.jpg`,
    isPremium: true,
    price: 123,
    title: `Canal View Prinsengracht`,
    type: OfferType.HOUSE,
    rating: 3.6,
  }, {
    id: 4,
    picture: `img/apartment-03.jpg`,
    isPremium: false,
    price: 9999,
    title: `Nice, cozy, warm big bed apartment`,
    type: OfferType.HOTEL,
    rating: 4.87,
  }
];


it(`Should match snapshot of Main`, () => {
  const tree = renderer
    .create(<Main
      offers={offers}
      onOfferTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
