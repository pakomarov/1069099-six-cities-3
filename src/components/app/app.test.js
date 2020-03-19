import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import App from './app.jsx';


const offers = [
  {
    id: 1,
    coords: [1, 2],
    picture: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    title: `Beautiful luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    rating: 0.1,
  }, {
    id: 2,
    coords: [1, 2],
    picture: `img/room.jpg`,
    isPremium: false,
    price: 80,
    title: `Wood and stone place`,
    type: OfferType.ROOM,
    rating: 1.3,
  }, {
    id: 3,
    coords: [1, 2],
    picture: `img/apartment-02.jpg`,
    isPremium: true,
    price: 123,
    title: `Canal View Prinsengracht`,
    type: OfferType.HOUSE,
    rating: 3.6,
  }, {
    id: 4,
    coords: [1, 2],
    picture: `img/apartment-03.jpg`,
    isPremium: false,
    price: 9999,
    title: `Nice, cozy, warm big bed apartment`,
    type: OfferType.HOTEL,
    rating: 4.87,
  }
];


it(`Should match snapshot of App`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
    />, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
