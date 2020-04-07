import React, {memo} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';


const OfferList = ({
  offers,
  onOfferFocus,
  onOfferFocusRemove,
  onOfferTitleClick,
}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={`${offer.id}`}
          offer={offer}
          onFocus={onOfferFocus}
          onFocusRemove={onOfferFocusRemove}
          onTitleClick={onOfferTitleClick}
        />
      ))}
    </div>
  );
};


OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  onOfferFocus: PropTypes.func.isRequired,
  onOfferFocusRemove: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};


export default memo(OfferList);
