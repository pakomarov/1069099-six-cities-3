import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {OfferType} from '../../const.js';
import PageMain from './page-main.jsx';


const mockStore = configureStore([]);


it(`Should match snapshot of Main`, () => {
  const store = mockStore({
    offers: [{
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
        zoom: 12,
      },
    }],
    selectedCity: {
      coords: [52.38333, 4.9],
      name: `Amsterdam`,
      zoom: 12,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PageMain
            onOfferTitleClick={() => {}}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
