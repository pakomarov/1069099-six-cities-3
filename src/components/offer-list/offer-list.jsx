import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';


const handleOfferMouseOver = () => {};


const OfferList = ({offers, onOfferTitleClick}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => (
        <OfferCard
          key={`${i}-${offer.title}`}
          offer={offer}
          onMouseOver={handleOfferMouseOver}
          onTitleClick={onOfferTitleClick}
        />
      ))}
    </div>
  );
};


OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};


export default OfferList;
