import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {OfferType} from '../../const.js';


const TypeValueToTypeName = {
  [OfferType.APARTMENT]: `Apartment`,
  [OfferType.ROOM]: `Private room`,
  [OfferType.HOUSE]: `House`,
  [OfferType.HOTEL]: `Hotel`,
};


const convertStarRatingToPercentageRating = (starRating) => Math.round(starRating) * 20;


const OfferCard = ({
  offer,
  onFocus,
  onFocusRemove,
  onTitleClick
}) => {
  const {
    id,
    thumbnail,
    isPremium,
    price,
    title,
    type: typeValue,
    rating: starRating,
  } = offer;

  const percentageRating = convertStarRatingToPercentageRating(starRating);
  const typeName = TypeValueToTypeName[typeValue];

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onFocus(id)}
      onMouseLeave={() => onFocusRemove()}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={thumbnail}
            width="260" height="200" alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{width: `${percentageRating}%`}}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={() => onTitleClick(offer)}
          >{title}</a>
        </h2>
        <p className="place-card__type">{typeName}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.ROOM, OfferType.HOUSE, OfferType.HOTEL]),
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onFocus: PropTypes.func.isRequired,
  onFocusRemove: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};


export default memo(OfferCard);
