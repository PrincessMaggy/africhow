import {useState} from 'react';
import emailjs from '@emailjs/browser';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
                alert('Your mail is sent!');
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
        <form onSubmit={handleSubmit} id='myForm'>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                name='from_name'
                value={formData.name}
                onChange={handleChange}
                required
            />
            <br /> <br />
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                name='from_email'
                value={formData.email}
                onChange={handleChange}
                required
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
            />
            <br />
            <br />
            <button type='submit'>Send Email</button>
        </form>
    );
}

export default EmailForm;
