import React, {memo} from 'react';
import PropTypes from 'prop-types';


const convertStarRatingToPercentageRating = (starRating) => Math.round(starRating) * 20;


const Review = ({
  review: {
    text,
    rating,
    user: {
      name,
      avatar,
    },
    date,
  }
}) => {
  const percentageRating = convertStarRatingToPercentageRating(rating);
  const attributeDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, `0`)}-${String(date.getDate()).padStart(2, `0`)}`;
  const textDate = date.toLocaleString(`en-US`, {month: `long`, year: `numeric`});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${percentageRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={attributeDate}>
          {textDate}
        </time>
      </div>
    </li>
  );
};


Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};


export default memo(Review);
