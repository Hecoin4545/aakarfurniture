import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-section">
            <div className="why-choose-bg-pattern"></div>

            {/* Background Animation Elements */}
            <div className="why-choose-floating-elements">
                <div className="float-shape shape-1"></div>
                <div className="float-shape shape-2"></div>
                <div className="float-shape shape-3"></div>
                <div className="float-shape shape-4"></div>
            </div>

            <div className="why-choose-header animate-on-scroll">
                <span className="why-choose-subtitle">Why Choose Us?</span>
                <h2 className="why-choose-title">Why Choose Aakar Furniture?</h2>
                <p className="why-choose-description">
                    Aakar Furniture brings you a creative team with expertise in Home Interior & Furnishing,
                    Office spaces, and Renovation. We build with the best materials in the market at a reasonable budget.
                </p>
            </div>

            <div className="features-grid">
                {/* Feature 1 */}
                <div className="feature-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
                    <div className="icon-wrapper">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                            <path d="M2 2l7.586 7.586"></path>
                            <circle cx="11" cy="11" r="2"></circle>
                        </svg>
                    </div>
                    <h3>Creative Designers</h3>
                    <p>
                        From chic to timeless, our imaginative designers craft designs reflecting your personality,
                        elevating your space to new heights with flair.
                    </p>
                    <div className="card-border-effect"></div>
                </div>

                {/* Feature 2 */}
                <div className="feature-card animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
                    <div className="icon-wrapper">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                    <h3>Premium Quality Material</h3>
                    <p>
                        Our commitment to quality shines through in every detail. From luxurious fabrics to
                        exquisite finishes, we ensure lasting beauty.
                    </p>
                    <div className="card-border-effect"></div>
                </div>

                {/* Feature 3 */}
                <div className="feature-card animate-on-scroll" style={{ transitionDelay: '0.5s' }}>
                    <div className="icon-wrapper">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <path d="M9 12l2 2 4-4"></path>
                        </svg>
                    </div>
                    <h3>Up to 10-Year Warranty</h3>
                    <p>
                        Enjoy peace of mind with our generous warranty coverage. We stand behind our artistry,
                        ensuring quality, durability, and your satisfaction.
                    </p>
                    <div className="card-border-effect"></div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
