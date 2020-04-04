import React from 'react';
import renderer from 'react-test-renderer';
import {OfferType} from '../../const.js';
import PageOffer from './page-offer.jsx';


const offer = {
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
};

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


it(`Should match snapshot of PageOffer`, () => {
  const tree = renderer
    .create(<PageOffer
      offer={offer}
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
