import {useState} from 'react';
import emailjs from '@emailjs/browser';

function EmailForm() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
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
                alert('Your email has been sent!');
            })
            .catch((error) => {
                alert('Oops... ' + JSON.stringify(error));
            });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded px-2 pt-2 pb-2 mb-4'
        >
            <label htmlFor='from_name'>Name:</label>
            <input
                type='text'
                name='from_name'
                value={formData.from_name}
                onChange={handleChange}
                required
                className='input-field     bg-white shadow-md rounded px-2 pt-2 pb-2 mb-4
                '
            />
            <br />
            <br />
            <label htmlFor='from_email'>Email:</label>
            <input
                type='email'
                name='from_email'
                value={formData.from_email}
                onChange={handleChange}
                required
                className='input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline  '
            />
            <br />
            <br />
            <label htmlFor='message'>Message:</label>
            <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='4'
                required
                className='input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline'
            />
            <br />
            <br />
            <button
                type='submit'
                className='bg-green-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline'
            >
                Send Email
            </button>
        </form>
    );
}

export default EmailForm;
