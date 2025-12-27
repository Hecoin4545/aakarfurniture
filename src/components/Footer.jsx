import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Top Section: CTA */}
                <div className="footer-cta-section">
                    <h2 className="footer-cta-text">Have a vision for your space?</h2>
                    <Link to="/contact" className="footer-cta-link">
                        Let's Apply Physics <span className="arrow-icon">→</span>
                    </Link>
                </div>

                <div className="footer-divider"></div>

                {/* Middle Section: Grid */}
                <div className="footer-links-grid">
                    {/* Brand Info */}
                    <div className="footer-column brand-info">
                        <div className="footer-logo">AAKAR.</div>
                        <p className="footer-address">
                            A-504 Union Heights, Vesu,<br />
                            Surat, Gujarat - 395007
                        </p>
                        <a href="mailto:info@aakararchitects.co.in" className="footer-email">
                            info@aakararchitects.co.in
                        </a>
                        <a href="tel:+919925716269" className="footer-phone">
                            +91 99257 16269
                        </a>
                    </div>

                    {/* Navigation */}
                    <div className="footer-column">
                        <h4 className="footer-col-title">Sitemap</h4>
                        <ul className="footer-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Projects</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">Studio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="footer-column">
                        <h4 className="footer-col-title">Social</h4>
                        <ul className="footer-nav">
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                        </ul>
                    </div>

                    {/* Legal / Extra */}
                    <div className="footer-column mobile-hide">
                        <h4 className="footer-col-title">Legal</h4>
                        <ul className="footer-nav">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span className="copyright">© 2025 Aakar Architects & Associates.</span>
                    <button onClick={scrollToTop} className="back-to-top">
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
