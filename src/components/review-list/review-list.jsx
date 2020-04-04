import React from 'react';
import PropTypes from 'prop-types';
import {MAX_REVIEW_COUNT} from '../../const.js';
import Review from '../review/review.jsx';


const ReviewList = ({reviews}) => {
  const reviewCount = reviews.length;

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewCount}</span></h2>
      <ul className="reviews__list">
        {reviews.slice(0, MAX_REVIEW_COUNT).map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    </>
  );
};


ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};


export default ReviewList;
