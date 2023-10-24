
import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewCard
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
