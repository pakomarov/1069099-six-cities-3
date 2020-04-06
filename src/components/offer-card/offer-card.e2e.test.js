import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {OfferType} from '../../const.js';
import OfferCard from './offer-card.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});


const offer = {
  id: 0,
  thumbnail: ``,
  isPremium: true,
  price: 0,
  title: ``,
  type: OfferType.APARTMENT,
  rating: 0,
};


it(`Should call onTitleClick`, () => {
  const onTitleClick = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onFocus={() => {}}
        onFocusRemove={() => {}}
        onTitleClick={onTitleClick}
      />
  );

  const offerTitleElement = offerCard.find(`.place-card__name a`);

  offerTitleElement.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalled();
});

it(`Should pass offer prop into the callback onTitleClick`, () => {
  const onTitleClick = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onFocus={() => {}}
        onFocusRemove={() => {}}
        onTitleClick={onTitleClick}
      />
  );

  const offerTitleElement = offerCard.find(`.place-card__name a`);

  offerTitleElement.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledWith(offer);
});

it(`Should pass offer id to onFocus on mouseenter event`, () => {
  const onFocus = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onFocus={onFocus}
        onFocusRemove={() => {}}
        onTitleClick={() => {}}
      />
  );

  const offerCardContainerElement = offerCard.find(`.place-card`);
  offerCardContainerElement.simulate(`mouseenter`);

  expect(onFocus).toHaveBeenCalledWith(offer.id);
});

it(`Should call onFocusRemove on mouseleave event`, () => {
  const onFocusRemove = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onFocus={() => {}}
        onFocusRemove={onFocusRemove}
        onTitleClick={() => {}}
      />
  );

  const offerCardContainerElement = offerCard.find(`.place-card`);
  offerCardContainerElement.simulate(`mouseleave`);

  expect(onFocusRemove).toHaveBeenCalled();
});
