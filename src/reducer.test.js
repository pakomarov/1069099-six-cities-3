import {reducer, ActionCreator} from './reducer.js';
import {OfferType} from './const.js';


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
      coords: [52.38333, 4.9],
      name: `Amsterdam`,
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
      coords: [52.38333, 4.9],
      name: `Paris`,
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
      coords: [52.38333, 4.9],
      name: `Brussels`,
    },
  }
];

it(`Should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers,
    selectedCity: {
      coords: [52.38333, 4.9],
      name: `Amsterdam`,
    }
  });
});

it(`Should change selectedCity to a given value`, () => {
  const initialState = {
    offers: void 0,
    selectedCity: {
      coords: [1, 2],
      name: `InitialCity`,
    }
  };

  const payload = {
    coords: [3, 4],
    name: `FinalCity`,
  };

  const finalState = {
    offers: void 0,
    selectedCity: payload,
  };

  expect(reducer(initialState, ActionCreator.selectCity(payload))).toEqual(finalState);
});
