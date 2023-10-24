import React from 'react';

const MessageBox = ({ onReply }) => {
  const [message, setMessage] = React.useState('');

  const handleReply = () => {
    onReply(message);
    setMessage('');
  };

  return (
    <div className="message-box">
      <textarea
        className="message-input"
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="reply-button" onClick={handleReply}>
        Reply
      </button>
    </div>
  );
};

export default MessageBox;
