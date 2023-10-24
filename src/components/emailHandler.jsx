import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function EmailForm() {

    //this will be use to link to the next page immediately after the user clicks the submit button
    const navigate = useNavigate()

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
        const serviceID = 'service_qhasj94'; // Replace with your EmailJS service ID
        const templateID = 'template_cpiddps'; // Replace with your EmailJS template ID
        const userID = '1CQ4xPbdbWZCPvcRD'; // Replace with your public key

        emailjs
            .sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result);
                alert('Your email has been sent!');
            })
            .catch((error) => {
                alert('Oops... ' + JSON.stringify(error));
            });
        navigate("/supportsuccess")
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (

        <div className="font-body text-words font-normal">
            <div className="mx-4">
                <div className="leading-5 text-sm lg:text-xl md:mx-32 lg:mx-50 lg:p-7">
                    <div className="lg:text-center lg:my-6 my-4">
                        <p>
                            For any complaint or feedback, please fill out the following
                            details.
                        </p>
                        <p>Our support team will respond within 1-2 working days.</p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="my-2 flex flex-col lg:gap-3 justify-start py-2 sm:mb-10 lg:mb-20"
                    >
                        <label htmlFor='from_name'>Name <span className="text-red-700 text-xl">*</span></label>
                        <input
                            type='text'
                            name='from_name'
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            className= "border  border-words h-12 my-1"
                        />
                        <br />
                        
                        <label htmlFor='from_email'>Email <span className="text-red-700 text-xl">*</span></label>
                        <input
                            type='email'
                            name='from_email'
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                            className="border  border-words h-12 my-1"/>
                        <br />
                        
                        <div className="flex gap-x-1 my-3">
                            <input type="checkbox"></input>{" "}
                            <label className="font-medium text-base lg:text-2xl">
                                Save details
                            </label>
                        </div>
                        <br />

                        <div className="flex flex-col justify-start">
                            <label htmlFor='email_subject'>Subject</label>
                            <input
                                type="text"
                                name='email_subject' 
                                className="border border-words h-12 my-1"
                                required
                            ></input>
                        </div>
                        <br />

                        <label htmlFor='message'>Complaint/Feedback <span className="text-red-700 text-xl">*</span></label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            onInput={handleTextChange}
                            rows="6"
                            cols="15"
                            required
                            className='border  border-words'
                        />
                        <br />

                        <p className="text-end">
                            {text.length}/{maxLength}
                        </p>
                        <br />
                        
                        <button
                            type='submit'
                            className='w-fit h-fit py-2 px-6 font-medium text-base bg-primary'
                        >
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmailForm;
