import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should call onCardNameClick`, () => {
  const onCardNameClick = jest.fn();

  const placeCard = shallow(
      <OfferCard
        place={`Some place somewhere`}
        onCardNameClick={onCardNameClick}
      />
  );

  const cardName = placeCard.find(`.place-card__name a`);

  cardName.props().onClick();

  expect(onCardNameClick).toHaveBeenCalledTimes(1);
});
