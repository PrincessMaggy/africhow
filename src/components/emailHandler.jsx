import {useState} from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmailForm() {
    //this will be use to link to the next page immediately after the user clicks the submit button
    const navigate = useNavigate();

    //This change will result in the character count updating in real-time as the user types or pastes text into the textarea
    const [text, setText] = useState('');
    const maxLength = 150;

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= maxLength) {
            setText(inputText);
        }
    };

    //This change will enable us(developer) to use EmailJS to recieve the content of the submitted form.
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        email_subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceID = 'service_zft1lfa'; // Replace with your EmailJS service ID
        const templateID = 'template_aauvizl'; // Replace with your EmailJS template ID
        const userID = 'Y1LM7C2Bnibun3ZAB'; // Replace with your public key

        emailjs
            .sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result);
                toast.success('Your email has been sent!');

                // Delay the navigation using setTimeout
                setTimeout(() => {
                    navigate('/supportsuccess');
                }, 3000); // 3000 milliseconds (3 seconds)
            })

            .catch((error) => {
                toast.error('Oops... ' + JSON.stringify(error));
            });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <div className='font-body text-words font-normal'>
            <div className='mx-4'>
                <div className='leading-5 text-sm md:text-lg lg:text-xl md:mx-36 lg:mx-64 lg:p-7 text-left lg:text-center'>
                    <div className='md:my-6 my-4'>
                        <p>
                            For any complaint or feedback, please fill out the
                            following details.
                        </p>
                        <p>
                            Our support team will respond within 1-2 working
                            days.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className='mb-2 flex flex-col md:gap-2 justify-start py-2 sm:mb-10 lg:mb-20 text-left'
                    >
                        <label htmlFor='from_name' className='font-bold'>
                            Name <span className='text-red-700 text-xl'>*</span>
                        </label>
                        <input
                            type='text'
                            name='from_name'
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            className='border  border-words h-12 my-1'
                        />
                        <br />

                        <label htmlFor='from_email' className='font-bold'>
                            Email{' '}
                            <span className='text-red-700 text-xl'>*</span>
                        </label>
                        <input
                            type='email'
                            name='from_email'
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                            className='border  border-words h-12 my-1'
                        />
                        <br />

                        {/* <div className="flex gap-x-1 my-3">
                            <input type="checkbox"></input>{" "}
                            <label className="font-medium text-base lg:text-2xl">
                                Save details
                            </label>
                        </div> */}
                        <br />

                        <div className='flex flex-col justify-start'>
                            <label
                                htmlFor='email_subject'
                                className='font-bold'
                            >
                                Subject
                            </label>
                            <input
                                type='text'
                                name='email_subject'
                                className='border border-words h-12 my-1'
                                required
                            ></input>
                        </div>
                        <br />

                        <label htmlFor='message' className='font-bold'>
                            Complaint/Feedback{' '}
                            <span className='text-red-700 text-xl'>*</span>
                        </label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            onInput={handleTextChange}
                            rows='6'
                            cols='15'
                            required
                            className='border  border-words'
                        />
                        <br />

                        <p className='text-end'>
                            {text.length}/{maxLength}
                        </p>
                        <br />

                        <button
                            type='submit'
                            className='w-fit h-fit py-2 px-6 font-medium text-base bg-primary rounded'
                        >
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                autoClose={3000}
                hideProgressBar={true}
                pauseOnHover={false}
                theme='colored'
            />
        </div>
    );
}

export default EmailForm;
