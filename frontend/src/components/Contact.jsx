import React, {useState} from "react";
import axios from 'axios';
import './Contact.css'
const Contact = () => {
    const [formData, setFormData] = useState({
    user_email: '',
    subject: '',
    message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const sendEmail = (e) => {
        e.preventDefault();
        axios.post('https://imabujabedbackend.vercel.app/send-email', formData)
        .then((response)=> {console.log('Email Sent Success', response.data), alert('Email Sent Successfully')})
        .catch((error) => {
        console.error('Error sending email:', error), alert('Failed to send Email. Please Check About Me section to view my email')})
    }

     return (
        <form onSubmit={sendEmail} className="contact-form">
        <p>Don't hesitate to send message, I Don’t Bite :) </p>
        <input type="email" name="user_email" placeholder="Enter your email address" required onChange={handleChange} />
        <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
        <textarea name="message" placeholder="Your message" onChange={handleChange} />
        <input type="submit" value="Send Email" />
        </form>
  )
}

export default Contact;