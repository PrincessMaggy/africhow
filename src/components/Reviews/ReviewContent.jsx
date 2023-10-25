import React from 'react'

const ReviewContent = () => {
  return (
    <div>
      {/* User Information */}
      <div className="left-[0] top-[150px]  flex-col justify-start items-start gap-4 inline-flex">
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
            <div className="flex items-center">
              <img className="w-9 h-9 rounded-full" src={Solomon} alt="user" />
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">Solomon Enahke</div>
                <div className="justify-center items-center gap-1 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div><div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    Rating
                  </div>
                  
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">12/10/2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review content */}
          <div className="w-96">
            <span className="text-neutral-600 text-sm font-normal font-['Manrope'] leading-tight tracking-tight">
              Enjoyed a delightful meal at this restaurant. The ambiance was great, and the service was excellent. I highly recommend it!
            </span>
            <span className="text-emerald-400 text-sm font-semibold font-['Manrope'] leading-tight tracking-tight">See more</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewContent
