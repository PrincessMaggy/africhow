import React from 'react';
import ReviewNav from '../components/Reviews/ReviewNav';
import ReviewsCard from './ReviewCard'; // Uncomment this line if needed
import Solomon from '../assets/Review-Images/Ellipse 8.png'; // Import Solomon image
import Star from '../assets/Review-Images/Star 3.png'; // Import Star image
import Joshua from '../assets/Review-Images/image 2.png';
import ReviewContent from '../components/Reviews/ReviewContent';

const ReviewReply = () => {
  return (
    <div>
      <ReviewNav />
      <div className="w-full h-20 relative bg-emerald-400 bg-opacity-10 flex items-center">
        <img className="w-12 h-12 left-0 ml-4 rounded-full" src={Joshua} alt="Joshua" />
        <div className="w-8 h-8 ml-64 mt-1 absolute" />
        <div className="ml-16 text-neutral-900 text-lg font-medium font-['Manrope'] tracking-tight">Good afternoon Joshua</div>
        <div className="ml-16 text-neutral-900 text-base font-medium font-['Manrope'] tracking-tight">You’ve received 20 reviews</div>
      </div>

      {/* Uncomment the ReviewsCard component if needed */}
      {/* <ReviewsCard /> */}
<ReviewContent/>
      
    </div>
  );
};

export default ReviewReply;
