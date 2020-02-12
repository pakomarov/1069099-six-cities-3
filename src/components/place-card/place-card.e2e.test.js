import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Card name click`, () => {
  const onCardNameClick = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        place={`Some place somewhere`}
        onCardNameClick={onCardNameClick}
      />
  );

  const cardName = placeCard.find(`.place-card__name a`);

  cardName.props().onClick();

  expect(onCardNameClick.mock.calls.length).toBe(1);
});
