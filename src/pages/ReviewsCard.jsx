import React from 'react';
import ReviewList from '../components/Reviews/ReviewList';

const ReviewsCard = () => {
  const reviews = [
    {
      author: 'Solomon Enakhe',
      rating: 10,
      content: 'Finally a taste of Africa. One thing about the jollof was that it felt like i was eating firewood rice. You know the type prepared in the village back in Nigeria, it was superb and the dodo... See more',
    },
  ];

  return (
    <div className="reviews">
      <h1>Reviews and Ratings</h1>
      {reviews.map((review) => (
        <ReviewList key={review.author} review={review} />
      ))}
    </div>
  );
};

export default ReviewsCard;
