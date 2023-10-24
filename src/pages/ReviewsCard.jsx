import React from 'react';

const ReviewsCard = () => {
  return (
    <div className="w-96 h-96 relative bg-white">
      {/* Header */}
      <div className="w-96 h-11 left-0 top-0 absolute">
        {/* Header content */}
      </div>

      {/* User Information */}
      <div className="left-[16px] top-[143px] absolute flex-col justify-start items-start gap-4 inline-flex">
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
          </div>

          {/* Review content */}
          <div className="w-96">
            <span className="text-neutral-600 text-sm font-normal font-['Manrope'] leading-tight tracking-tight">
              {/* Review text */}
            </span>
            <span className="text-emerald-400 text-sm font-semibold font-['Manrope'] leading-tight tracking-tight">See more</span>
          </div>

          {/* Message input */}
          <div className="self-stretch h-28 p-4 bg-white border border-zinc-100 justify-start items-start gap-2.5 inline-flex">
            <div className="text-center text-slate-500 text-sm font-medium font-['Manrope'] tracking-tight">Type your message</div>
          </div>
        </div>

        {/* Send button */}
        <div className="px-4 py-1 bg-emerald-400 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-base font-medium font-['Manrope'] tracking-tight">Send</div>
        </div>
      </div>

      {/* Review and Ratings Header */}
      <div className="w-96 h-12 left-0 top-[44px] absolute bg-white border-b border-zinc-300">
        <div className="left-[16px] top-[12px] absolute justify-start items-center gap-2 inline-flex">
          {/* Review icon and text */}
          <div className="w-6 h-6 relative bg-zinc-950">
            {/* Lines in the icon */}
          </div>
          <div className="text-zinc-950 text-lg font-medium font-['Manrope'] leading-relaxed">Reviews and Ratings</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
