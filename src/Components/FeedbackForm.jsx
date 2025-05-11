import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
            Name: ${formData.name}
            Email: $(formData.email)
            Feedback: $(formData.feedback)
            `;
    const isConfirmed = window.confirm('Please confirm your details: \n\n${confirmationMessage}');
    }

    

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder='Your Name'/>
        <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Your email' />        
        <textarea name='feedback' onChange={handleChange} value={formData.feedback} placeholder='Your Feedback' />
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
