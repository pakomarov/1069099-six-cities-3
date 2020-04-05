import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import {Catalog} from './catalog.jsx';


const cities = [
  {
    coords: [52.38333, 4.9],
    name: `Paris`,
    zoom: 12,
  }, {
    coords: [52.38333, 4.9],
    name: `Amsterdam`,
    zoom: 12,
  },
];

const selectedCity = {
  coords: [52.38333, 4.9],
  name: `Paris`,
  zoom: 12,
};

const offers = [
  {
    id: 2,
    coords: [52.369553943508, 4.85309666406198],
    thumbnail: `img/room.jpg`,
    isPremium: false,
    price: 80,
    title: `Wood and stone place`,
    type: OfferType.ROOM,
    rating: 1.3,
    images: [`img/apartment-03.jpg`],
    description: `blah blah`,
    bedroomCount: 3,
    maxGuestCount: 3,
    features: [`Heating`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `A`,
      isSuper: false,
    },
    city: {
      coords: [52.38333, 4.9],
      name: `Paris`,
      zoom: 12,
    },
  }, {
    id: 3,
    coords: [52.3909553943508, 4.929309666406198],
    thumbnail: `img/apartment-02.jpg`,
    isPremium: true,
    price: 123,
    title: `Canal View Prinsengracht`,
    type: OfferType.HOUSE,
    rating: 3.6,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    bedroomCount: 999,
    maxGuestCount: 666,
    features: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    city: {
      coords: [52.38333, 4.9],
      name: `Paris`,
      zoom: 12,
    },
  }
];


it(`Should match snapshot of Catalog`, () => {
  const tree = renderer
    .create(<Catalog
      cities={cities}
      selectedCity={selectedCity}
      offers={offers}
      onCitySelect={() => {}}
      onOfferTitleClick={() => {}}
    />, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
