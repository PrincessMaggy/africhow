import React from 'react'
import Reviewmenubar from '../../assets/Review-Images/reviewmenubar.png'



const ReviewNav = () => {
  return (
    <div className="flex justify-between w-[95%] mx-auto max-[390px]:mx-auto mt-4 max-[390px]:w-[358px] h-[38px] items-center">
    <div className="flex gap-2 items-center">
      <img src={Reviewmenubar} className="w-[24px] h-[24px]" />
      <p className="text-[25px] font-normal">Reviews and Ratings</p>
    </div>
    </div>
  )
}

export default ReviewNav
