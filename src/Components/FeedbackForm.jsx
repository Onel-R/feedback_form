import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
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
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}
            `;
        const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
        if(isConfirmed) {
            console.log('Submitting feedback: ', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
        });
        alert('Thank you for your valuable feedback!');
    }
    };

    

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder='Your Name'/>
        <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Your email' />        
        <textarea name='feedback' onChange={handleChange} value={formData.feedback} placeholder='Your Feedback' />
        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
            <span>Rate Us:</span>
            <p><input type="radio" name='rating' onChange={handleChange} value='1'/>1</p>
            <p><input type="radio" name='rating' onChange={handleChange} value='2'/>2</p>
            <p><input type="radio" name='rating' onChange={handleChange} value='3'/>3</p>
            <p><input type="radio" name='rating' onChange={handleChange} value='4'/>4</p>
            <p><input type="radio" name='rating' onChange={handleChange} value='5'/>5</p>
        </div>

        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
