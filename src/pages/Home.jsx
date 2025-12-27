import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import ProductCatalog from '../components/ProductCatalog';
import WhyChooseUs from '../components/WhyChooseUs';
import HappyCustomers from '../components/HappyCustomers';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
    // Simple intersection observer to trigger animations on scroll
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

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-container-inner">
                    <div className="hero-grid">
                        <div className="hero-text-content">
                            <h1 className="hero-main-title">
                                <span className="hero-tagline">PREMIUM DESIGN</span>
                                Welcome to Aakar
                            </h1>
                            <p className="hero-description">
                                Where vision meets reality. Crafting timeless spaces with elegance and precision.
                            </p>
                            <div className="hero-cta-group">
                                <Link to="/portfolio" className="cta-button gold">
                                    Explore Portfolio
                                </Link>
                                <a href="#welcome" className="scroll-hint">
                                    <span className="dot"></span> Scroll to discover
                                </a>
                            </div>
                        </div>

                        <div className="hero-form-wrapper animate-on-scroll">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome / About Section */}
            <section className="welcome-section">

                {/* Background Decor */}
                <div className="welcome-bg-decoration">
                    <div className="pattern-bg"></div>
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="floating-square square-1"></div>
                    <div className="floating-square square-2"></div>
                    <div className="floating-square square-3"></div>
                </div>

                {/* Image Side */}
                {/* Image & Stats Side (Left) */}
                <div className="welcome-left-column animate-on-scroll">
                    <div className="welcome-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
                            alt="Interior Design Main"
                            className="welcome-image-main"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop"
                            alt="Interior Detail"
                            className="welcome-image-accent"
                        />
                    </div>

                    {/* Stats to fill space */}
                    <div className="experience-stats">
                        <div className="stat-item">
                            <span className="stat-number">
                                <AnimatedCounter end={15} suffix="+" />
                            </span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">
                                <AnimatedCounter end={250} suffix="+" />
                            </span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">
                                <AnimatedCounter end={40} suffix="+" />
                            </span>
                            <span className="stat-label">Awards Won</span>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="welcome-content animate-on-scroll">
                    <span className="welcome-subtitle">Aakar Architects & Associates</span>
                    <h1 className="welcome-title">CRAFTING YOUR <br /><strong>DREAM SPACE</strong></h1>

                    <p className="welcome-description">
                        Aakar is a one stop destination for Architecture and Interior designing located in Surat, specializing in both residential and commercial design.
                        Whether you need a quick refresh of furniture and paint colors, or an extensive whole-house renovation, we shape your interior design into an expression of you.
                    </p>

                    <Link to="/portfolio" className="cta-button">
                        View Our Work
                    </Link>

                    {/* Featured Project Highlights */}
                    <div className="featured-projects">
                        <div className="project-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                            <span className="project-number">01</span>
                            <div className="project-info">
                                <h3>Modern Residential Villa</h3>
                                <p>Luxury meets comfort in this award-winning architectural masterpiece.</p>
                            </div>
                        </div>
                        <div className="project-card animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
                            <span className="project-number">02</span>
                            <div className="project-info">
                                <h3>Corporate Office Space</h3>
                                <p>Designed for productivity, this space redefines modern workspaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <HappyCustomers />

            <ProductCatalog />
        </div>
    );
};

export default Home;
