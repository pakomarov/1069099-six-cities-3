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
  picture: ``,
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
        onMouseOver={() => {}}
        onTitleClick={onTitleClick}
      />
  );

  const offerTitleElement = offerCard.find(`.place-card__name a`);

  offerTitleElement.props().onClick();

  expect(onTitleClick).toHaveBeenCalled();
});

it(`Should pass offer to onMouseOver on mouseover event`, () => {
  const onMouseOver = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onMouseOver={onMouseOver}
        onTitleClick={() => {}}
      />
  );

  const offerCardContainerElement = offerCard.find(`.place-card`);
  offerCardContainerElement.simulate(`mouseover`);

  expect(onMouseOver).toHaveBeenCalledWith(offer);
});
