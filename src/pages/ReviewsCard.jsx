import React from 'react';

const ReviewsCard = () => {
  return (
    <div className="max-w-3xl mx-auto w-full relative bg-white p-8">
      {/* User Information */}
      <div className="flex-col justify-start items-start gap-4">
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" alt="user" />
              <div className="flex-col justify-start items-start gap-1.5 ml-4">
                <div className="text-center text-zinc-950 text-xl font-medium font-inter tracking-tight">Solomon Enakhe</div>
                <div className="flex items-center gap-1">
                  <div className="text-black text-xs font-medium font-manrope tracking-tight">(Rating)</div>
                  <div className="w-2 h-2 bg-zinc-300 rounded-full" />
                  <div className="text-black text-xs font-medium font-manrope tracking-tight">12/10/2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review content */}
          <div className="w-full">
            <span className="text-neutral-600 text-sm font-normal font-manrope leading-tight tracking-tight">
              Enjoyed a delightful meal at this restaurant. The ambiance was great, and the service was excellent. I highly recommend it!
            </span>
            <span className="text-emerald-400 text-sm font-semibold font-manrope leading-tight tracking-tight">See more</span>
          </div>

          {/* Message input */}
          <div className="self-stretch h-20 p-4 bg-white border border-zinc-100 mt-4">
            <div className="text-slate-500 text-sm font-medium font-manrope tracking-tight">Type your message</div>
          </div>
        </div>

        {/* Send button */}
        <div className="px-4 py-2 bg-emerald-400 mt-4">
          <div className="text-center text-white text-base font-medium font-manrope tracking-tight cursor-pointer">Send</div>
        </div>
      </div>

      {/* Review and Ratings Header */}
      <div className="mt-8 border-b border-zinc-300">
        <div className="flex items-center gap-2">
          {/* <div className="text-zinc-950 text-lg font-medium font-manrope leading-relaxed">Reviews and Ratings</div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
