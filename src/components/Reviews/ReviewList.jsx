import React from 'react';
// import classNames from 'classnames';

const ReviewList = ({ review }) => {
  const { author, rating, content } = review;

  return (
    <div className="review">
      <div className="header">
        <h3 className="author">{author}</h3>
        <span className="rating">{rating}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default ReviewList;
