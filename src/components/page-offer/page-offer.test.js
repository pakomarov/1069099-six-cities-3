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


it(`Should match snapshot of Offer`, () => {
  const tree = renderer
    .create(<PageOffer
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
