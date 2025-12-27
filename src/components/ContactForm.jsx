import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        enquiry: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/your_id_here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', enquiry: '' });
                alert('Thank you! Your message has been sent successfully.');
            } else {
                setStatus('error');
                alert('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            alert('Error sending message. Please check your connection.');
        }
    };

    return (
        <div className="contact-form-container">
            <div className="form-header">
                <h3>Quick Enquiry</h3>
                <p>Send us a message and we'll get back to you shortly.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-row">
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <span className="bar"></span>
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="bar"></span>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <span className="bar"></span>
                    </div>
                    <div className="input-group">
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Service Preference</option>
                            <option value="interior">Interior Design</option>
                            <option value="furniture">Custom Furniture</option>
                            <option value="architecture">Architecture</option>
                            <option value="other">Other</option>
                        </select>
                        <span className="bar"></span>
                    </div>
                </div>
                <div className="input-group">
                    <textarea
                        name="enquiry"
                        placeholder="Your Enquiry..."
                        rows="5"
                        value={formData.enquiry}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <span className="bar"></span>
                </div>
                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                    <span>{status === 'sending' ? 'Sending...' : 'Send Enquiry'}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
