import React from 'react';
import PropTypes from 'prop-types';
import {MAX_REVIEW_COUNT} from '../../const.js';
import Review from '../review/review.jsx';


const ReviewList = ({reviews}) => {
  const reviewCount = reviews.length;
  const sortedByDateReviews = reviews.slice().sort((a, b) => (b.date - a.date));
  const trimmedAndSortedReviews = sortedByDateReviews.slice(0, MAX_REVIEW_COUNT);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewCount}</span></h2>
      <ul className="reviews__list">
        {trimmedAndSortedReviews.map((review) => (
          <Review
            key={`${review.id}`}
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
