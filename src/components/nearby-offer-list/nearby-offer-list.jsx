import React from 'react';
import PropTypes from 'prop-types';
import NearbyOffer from '../nearby-offer/nearby-offer.jsx';


const NearbyOfferList = ({nearbyOffers}) => {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((offer) => (
        <NearbyOffer
          key={`${offer.id}`}
          nearbyOffer={offer}
        />
      ))}
    </div>
  );
};


NearbyOfferList.propTypes = {
  nearbyOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};


export default NearbyOfferList;


