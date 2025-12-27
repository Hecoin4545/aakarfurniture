import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    // Scroll animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    const contactDetails = [
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
            title: "Call Us",
            detail: "+91 98765 43210",
            label: "Mon - Sat: 10AM - 7PM",
            link: "tel:+919876543210"
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
            title: "Email Us",
            detail: "hello@aakarfurniture.com",
            label: "We reply within 24 hours",
            link: "mailto:hello@aakarfurniture.com"
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
            title: "Visit Us",
            detail: "Ring Road, Surat, Gujarat",
            label: "Tap to view on Google Maps",
            link: "https://goo.gl/maps/example"
        }
    ];

    const socialLinks = [
        { name: 'Instagram', icon: 'IG', link: 'https://instagram.com' },
        { name: 'Facebook', icon: 'FB', link: 'https://facebook.com' },
        { name: 'LinkedIn', icon: 'LI', link: 'https://linkedin.com' },
        { name: 'Pinterest', icon: 'PI', link: 'https://pinterest.com' }
    ];

    return (
        <div className="contact-page">
            {/* Banner Section */}
            <section className="contact-banner">
                <div className="banner-bg-elements">
                    <div className="bg-glitch-line line-1"></div>
                    <div className="bg-glitch-line line-2"></div>
                    <div className="floating-ornament orn-1"></div>
                    <div className="floating-ornament orn-2"></div>
                </div>
                <div className="banner-content">
                    <span className="banner-tagline">Get In Touch</span>
                    <h1 className="banner-title">Let's Create Your <br /><span>Perfect Space</span></h1>
                    <div className="scroll-indicator">
                        <div className="mouse"></div>
                        <p>Scroll Down</p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info Cards */}
                        <div className="info-column">
                            <div className="section-head animate-on-scroll">
                                <span className="label">Contact Information</span>
                                <h2>Speak With Our Experts</h2>
                                <p>Whether you're looking for a consultation or have a quick query, we're here to help you every step of the way.</p>
                            </div>

                            <div className="details-grid">
                                {contactDetails.map((item, index) => (
                                    <a href={item.link} key={index} className="detail-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                                        <div className="card-icon">{item.icon}</div>
                                        <div className="card-body">
                                            <h3>{item.title}</h3>
                                            <p className="primary-text">{item.detail}</p>
                                            <p className="secondary-text">{item.label}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="social-connect animate-on-scroll">
                                <p>Follow Our Design Journey:</p>
                                <div className="social-icons-wrapper">
                                    {socialLinks.map((social) => (
                                        <a key={social.name} href={social.link} className="social-pill">
                                            <span>{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interactive Form Section */}
                        <div className="form-column animate-on-scroll">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence / Map Section */}
            <section className="map-section animate-on-scroll">
                <div className="map-container">
                    <div className="map-overlay-info">
                        <div className="info-content">
                            <h3>Our Creative Studio</h3>
                            <p>Plot No. 42, Design Hub, Ring Road, Surat, Gujarat - 395002</p>
                            <div className="map-cta">
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer">Open in Google Maps</a>
                            </div>
                        </div>
                    </div>
                    <div className="map-iframe-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709471!2d72.739894!3d21.159463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703154800000!5m2!1sen!2sin"
                            width="100%"
                            height="600"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
