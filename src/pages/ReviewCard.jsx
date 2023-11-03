import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import NewNavbar from '../components/NewNav/NewNavBar';
// import ReviewNav from '../components/Reviews/ReviewNav';
import Solomon from '../assets/Review-Images/Ellipse 8.png';
import Star from '../assets/Review-Images/Star 3.png';

const ReviewsCard = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendClick = () => {
        console.log('Sending message:', message);
        // Add logic here to send the message to the server or perform other actions

      event.preventDefault();
        navigate('/review-reply');
    };

    return (
        <div className='w-full md:w-96 lg:w-full h-96 relative bg-white'>
            <NewNavbar />

            {/* User Information */}
            <div className='left-[16px] top-[50px] absolute flex-col justify-start items-start gap-4 inline-flex'>
                {/* User details */}
                <div className='flex-col justify-start items-start gap-3 flex'>
                    {/* User profile */}
                    <div className='flex-col justify-end items-start gap-2 flex'>
                        {/* Profile image and user details */}
                        <div className='flex items-center'>
                            <img
                                className='w-9 h-9 rounded-full'
                                src={Solomon}
                                alt='user'
                            />
                            <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                                <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">
                                    Solomon Enahke
                                </div>
                                <div className='justify-center items-center gap-1 inline-flex'>
                                    <div className='justify-start items-start flex' />
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        <img src={Star} />
                                    </div>
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        <img src={Star} />
                                    </div>
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        <img src={Star} />
                                    </div>
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        <img src={Star} />
                                    </div>
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        <img src={Star} />
                                    </div>
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        (Rating)
                                    </div>
                                    <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                                        12/10/2023
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review content */}
                    <div className='w-full md:w-96 lg:w-full'>
                        <span className="text-neutral-600 text-sm font-normal font-['Manrope'] leading-tight tracking-tight">
                            Enjoyed a delightful meal at this restaurant. The
                            ambiance was great, and the service was excellent. I
                            highly recommend it!
                        </span>
                        <span className="text-emerald-400 text-sm font-semibold font-['Manrope'] leading-tight tracking-tight">
                            See more
                        </span>
                    </div>

                    {/* Message input */}
                    <div className='self-stretch h-28 p-4 bg-white border border-zinc-100 justify-start items-start gap-2.5 inline-flex'>
                        <textarea
                            className='w-full h-full resize-none outline-none'
                            placeholder='Type your message'
                            value={message}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Send button with navigate */}
                <button
                    className='px-4 py-1 bg-emerald-400 justify-center items-center gap-2.5 inline-flex'
                    style={{cursor: 'pointer'}}
                    onClick={handleSendClick}
                >
                    <div className="text-center text-white text-base font-medium font-['Manrope'] tracking-tight">
                        Send
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ReviewsCard;
