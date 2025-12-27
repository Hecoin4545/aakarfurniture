import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import './HappyCustomers.css';

const HappyCustomers = () => {
    const clients = [
        { id: 1, name: "Reliance", logo: "https://logo.clearbit.com/reliance.com" },
        { id: 2, name: "TATA", logo: "https://logo.clearbit.com/tata.com" },
        { id: 3, name: "Godrej", logo: "https://logo.clearbit.com/godrej.com" },
        { id: 4, name: "Asian Paints", logo: "https://logo.clearbit.com/asianpaints.com" },
        { id: 5, name: "Honda", logo: "https://logo.clearbit.com/honda.com" },
        { id: 6, name: "DLF", logo: "https://logo.clearbit.com/dlf.in" },
        { id: 7, name: "L&T", logo: "https://logo.clearbit.com/larsentoubro.com" },
        { id: 8, name: "UltraTech", logo: "https://logo.clearbit.com/ultratechcement.com" }
    ];

    // Double the array for a seamless loop
    const displayClients = [...clients, ...clients];

    return (
        <section className="client-trust-section">
            <div className="trust-backdrop">
                <span className="backdrop-text">5000+ TRUSTED CLIENTS</span>
            </div>

            <div className="trust-content-wrapper">
                <div className="trust-header animate-on-scroll">
                    <div className="trust-stat-circle">
                        <div className="stat-inner">
                            <span className="stat-big"><AnimatedCounter end={5000} suffix="+" /></span>
                            <span className="stat-small">Smiles Delivered</span>
                        </div>
                    </div>
                    <div className="trust-text">
                        <h3>Our Prestigious Clientele</h3>
                        <p>Partnering with industry leaders to create exceptional spaces that inspire and empower.</p>
                    </div>
                </div>

                <div className="marquee-container">
                    <div className="marquee-track">
                        {displayClients.map((client, index) => (
                            <div className="marquee-item" key={`${client.id}-${index}`}>
                                <div className="client-logo-box">
                                    <img src={client.logo} alt={client.name} title={client.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="marquee-overlay-left"></div>
                    <div className="marquee-overlay-right"></div>
                </div>
            </div>
        </section>
    );
};

export default HappyCustomers;
