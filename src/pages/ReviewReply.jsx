import React, { useState, useEffect } from 'react';
// import ReviewNav from '../components/Reviews/ReviewNav';
import Solomon from '../assets/Review-Images/Ellipse 8.png'; // Import Solomon image
import Star from '../assets/Review-Images/Star 3.png'; // Import Star image
import Joshua from '../assets/Review-Images/image 2.png';
import NewNavbar from '../components/NewNav/NewNavBar';

const ReviewReply = () => {
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load reviews from local storage on component mount
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  const handleReply = (index) => {
    // Implement your reply functionality here
    console.log(`Reply button clicked for review at index ${index}`);
  };

  const handleAddComment = (index) => {
    // Implement your add comment functionality here
    const updatedReviews = [...reviews];
    updatedReviews[index].comments.push(comment);
    setReviews(updatedReviews);
    setComment('');

    // Save updated reviews to local storage
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  const handleDelete = (reviewIndex, commentIndex) => {
    // Implement your delete functionality here
    const updatedReviews = [...reviews];
    updatedReviews[reviewIndex].comments.splice(commentIndex, 1);
    setReviews(updatedReviews);

    // Save updated reviews to local storage
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  return (
    <div>
      <NewNavbar />
      {reviews.map((review, index) => (
        <div key={index} className="left-[25px] top-[500px] absolute flex-col justify-start items-start gap-4 inline-flex ">
          {/* User details */}
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="flex-col justify-end items-start gap-2 flex">
              <div className="flex items-center">
                <img className="w-9 h-9 rounded-full" src={review.userImage} alt="user" />
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">{review.userName}</div>
                  <div className="justify-center items-center gap-1 inline-flex">
                    {/* Display star ratings here */}
                    {Array.from({ length: review.rating }, (_, i) => (
                      <div key={i} className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                        <img src={Star} alt="star" />
                      </div>
                    ))}
                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                      Rating
                    </div>
                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">{review.date}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review content */}
            <div className="w-full md:w-96 lg:w-full">
              <span className="text-neutral-600 text-sm font-normal font-['Manrope'] leading-tight tracking-tight">
                {review.content}
              </span>
              <span className="text-emerald-400 text-sm font-semibold font-['Manrope'] leading-tight tracking-tight">See more</span>
            </div>
          </div>

          {/* Comment section */}
          <div className="w-full md:w-96">
            {review.comments.map((comment, commentIndex) => (
              <div key={commentIndex} className="text-neutral-600 text-sm font-normal font-['Manrope'] leading-tight tracking-tight">
                {comment}
                <div className="Btn-delete px-4 py-1 justify-center items-center gap-2.5 inline-flex">
                  <div
                    className="text-center text-red-800 text-base font-medium font-['Manrope'] tracking-tight cursor-pointer"
                    onClick={() => handleDelete(index, commentIndex)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment section */}
          <div className="flex-col justify-start items-start gap-3 flex">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comment..."
              className="w-full h-20 px-4 py-2 border border-neutral-300 rounded-md"
            />
            <div className="Btn-delete px-4 py-1 justify-center items-center gap-2.5 inline-flex">
              <div
                className="text-center text-emerald-800 text-base font-medium font-['Manrope'] tracking-tight cursor-pointer"
                onClick={() => handleAddComment(index)}
              >
                Add Comment
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewReply;
  