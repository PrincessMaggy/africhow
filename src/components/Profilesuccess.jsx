import React from 'react';
import message from '../assets/ProfileImg/check_circle.png';

export default function Profilesuccess() {
  return (
    <div className="m-5">
      <div className="w-[300px] h-72 border m-auto rounded  shadow">
        <h1 className="text- font-bold m-3 text-green-200">Success</h1>
        <p className="m-3 text-sm font-normal">
          Your changes have been successfully saved{" "}
        </p>
        <img src={message} className="ml-12" />
      </div>
    </div>
  );
}
