import React from 'react'

const TextMessage = ({
    sender,
    rating,
    date,
    message,
  }) => {
    return (
      <TailwindCSS>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="font-bold">{sender}</div>
            <div className="text-gray-500">{date}</div>
            <div className="text-yellow-500">{rating}</div>
          </div>
          <div className="text-gray-700">{message}</div>
        </div>
      </TailwindCSS>
    );
  };
  
  export default TextMessage;
  
