
import React from 'react';
import ReviewsCard from '../../pages/ReviewsCard';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewsCard
          key={index}
          name={review.name}
          date={review.date}
          content={review.content}
          avatarUrl={review.avatarUrl}
        />
      ))}
    </div>
  );
};

export default ReviewList;
