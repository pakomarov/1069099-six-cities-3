import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import App from './app.jsx';


const offers = [
  {
    id: 1,
    coords: [52.3909553943508, 4.85309666406198],
    thumbnail: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    title: `Beautiful luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    rating: 0.1,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    bedroomCount: 3,
    maxGuestCount: 3,
    features: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    city: {
      coords: [52.38333, 4.9]
    },
  }, {
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
      coords: [52.38333, 4.9]
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
      coords: [52.38333, 4.9]
    },
  }, {
    id: 4,
    coords: [52.3809553943508, 4.939309666406198],
    thumbnail: `img/apartment-03.jpg`,
    isPremium: false,
    price: 9999,
    title: `Nice, cozy, warm big bed apartment`,
    type: OfferType.HOTEL,
    rating: 4.87,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    bedroomCount: 3,
    maxGuestCount: 3,
    features: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    city: {
      coords: [52.38333, 4.9]
    },
  }
];

const reviews = [
  {
    id: 1,
    text: `Very nice place`,
    rating: 5,
    user: {
      name: `Ivan`,
      avatar: `img/avatar-angelina.jpg`,
    },
    date: new Date(`2019-05-08T14:13:56.569Z`),
  },
  {
    id: 2,
    text: `Bad bad bad`,
    rating: 1,
    user: {
      name: `John Doe`,
      avatar: `img/avatar-angelina.jpg`,
    },
    date: new Date(`2016-04-06T14:13:56.569Z`),
  },
  {
    id: 3,
    text: `Good enough`,
    rating: 4,
    user: {
      name: `Marina`,
      avatar: `img/avatar-angelina.jpg`,
    },
    date: new Date(`1917-06-26T14:13:56.569Z`),
  },
];

const nearbyOffers = [
  {
    id: 1,
    coords: [52.3909553943508, 4.85309666406198],
    thumbnail: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    title: `Beautiful luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    rating: 0.1,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    bedroomCount: 3,
    maxGuestCount: 3,
    features: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  }, {
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
    }
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
    }
  },
];


it(`Should match snapshot of App`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
      reviews={reviews}
      nearbyOffers={nearbyOffers}
    />, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
