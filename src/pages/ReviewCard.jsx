import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NewNavbar from '../components/NewNav/NewNavBar';
import Solomon from '../assets/Review-Images/Ellipse 8.png';
import Star from '../assets/Review-Images/Star 3.png';

const ReviewsCard = () => {
  const [message, setMessage] = useState('');
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Sending message:', message);
    // Add logic here to send the message to the server or perform other actions
  };

  const handleSeeMoreClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-96 h-auto relative bg-white p-4">
      <NewNavbar />

      {/* User details */}
      <div className="flex items-center gap-4">
        {/* Profile image and user details */}
        {/* ... (existing code) */}
      </div>

      {/* Review content */}
      <div className="w-full">
        <span className={`text-neutral-600 text-sm font-normal font-['Manrope'] leading-tight tracking-tight ${expanded ? '' : 'truncate'}`}>
          Enjoyed a delightful meal at this restaurant. The ambiance was great, and the service was excellent. I highly recommend it!
        </span>
        {expanded || (
          <span
            className="text-emerald-400 text-sm font-semibold cursor-pointer"
            onClick={handleSeeMoreClick}
          >
            See more
          </span>
        )}
      </div>

      {/* Message input */}
      <div className="self-stretch h-28 p-4 bg-white border border-zinc-100 justify-start items-start gap-2.5 inline-flex">
        <textarea
          className="w-full h-full resize-none outline-none"
          placeholder="Type your message"
          value={message}
          onChange={handleInputChange}
        />
      </div>

      {/* Send button */}
      <button
        className="px-4 py-1 bg-emerald-400 justify-center items-center gap-2.5 inline-flex"
        onClick={handleSendClick}
      >
        <div className="text-center text-white text-base font-medium font-['Manrope'] tracking-tight">Send</div>
      </button>
    </div>
  );
};

export default ReviewsCard;
