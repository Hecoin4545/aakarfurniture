import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Scroll progress for animations
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxScroll) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for scroll animations
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

    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "Rajesh Patel",
            role: "Founder & Lead Architect",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
            description: "With 20+ years of experience, Rajesh leads our design vision with passion and precision."
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Interior Design Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
            description: "Priya transforms spaces into stunning environments that reflect our clients' personalities."
        },
        {
            id: 3,
            name: "Amit Kumar",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
            description: "Amit ensures every project is delivered on time with exceptional quality and attention to detail."
        },
        {
            id: 4,
            name: "Sneha Desai",
            role: "Senior Designer",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
            description: "Sneha brings innovative design solutions that blend aesthetics with functionality."
        }
    ];

    // Skills data with percentages
    const skills = [
        { name: "Interior Design", percentage: 95, color: "#c9a961" },
        { name: "Architecture", percentage: 90, color: "#b8975f" },
        { name: "3D Visualization", percentage: 88, color: "#c9a961" },
        { name: "Project Management", percentage: 92, color: "#b8975f" },
        { name: "Custom Furniture", percentage: 96, color: "#c9a961" },
        { name: "Space Planning", percentage: 94, color: "#b8975f" }
    ];

    // Company timeline
    const timeline = [
        { year: "2008", title: "Foundation", description: "Aakar Furniture was established in Surat with a vision to revolutionize interior design." },
        { year: "2012", title: "Expansion", description: "Opened our first showroom and expanded our team to 20+ professionals." },
        { year: "2016", title: "Recognition", description: "Received the 'Best Interior Design Firm' award in Gujarat." },
        { year: "2020", title: "Innovation", description: "Launched our 3D visualization service and sustainable design initiative." },
        { year: "2024", title: "Excellence", description: "Completed 250+ projects and established ourselves as industry leaders." }
    ];

    return (
        <div className="about-page">
            {/* Banner Section */}
            <section className="about-banner">
                {/* Animated Background Elements */}
                <div className="banner-bg-elements">
                    <div className="bg-shape shape-circle-1"></div>
                    <div className="bg-shape shape-circle-2"></div>
                    <div className="bg-grid"></div>
                    <div className="bg-line line-1"></div>
                    <div className="bg-line line-2"></div>
                    <div className="bg-line line-3"></div>
                </div>

                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <span className="banner-subtitle">About Aakar</span>
                    <h1 className="banner-title">Crafting Dreams Into Reality</h1>
                    <div className="banner-accent-line"></div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="our-story-section">
                <div className="story-bg-elements">
                    <div className="floating-square sq-1"></div>
                    <div className="floating-square sq-2"></div>
                    <div className="floating-circle circ-1"></div>
                </div>

                <div className="story-container">
                    <div className="story-content animate-on-scroll">
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">Building Excellence Since 2008</h2>
                        <p className="story-description">
                            Aakar Furniture began as a small workshop in Surat with a simple mission: to create furniture
                            that tells a story. Over the years, we've evolved into a full-service architecture and interior
                            design firm, but our core values remain unchanged.
                        </p>
                        <p className="story-description">
                            We believe that every space has a unique personality waiting to be discovered. Our team of
                            passionate designers and craftsmen work tirelessly to bring your vision to life, combining
                            traditional craftsmanship with modern innovation.
                        </p>

                        <div className="story-stats">
                            <div className="stat-box animate-on-scroll">
                                <h3 className="stat-number">250+</h3>
                                <p className="stat-label">Projects Completed</p>
                            </div>
                            <div className="stat-box animate-on-scroll">
                                <h3 className="stat-number">15+</h3>
                                <p className="stat-label">Years Experience</p>
                            </div>
                            <div className="stat-box animate-on-scroll">
                                <h3 className="stat-number">40+</h3>
                                <p className="stat-label">Awards Won</p>
                            </div>
                        </div>
                    </div>

                    <div className="story-images animate-on-scroll">
                        <div className="image-grid">
                            <div className="grid-image large">
                                <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop" alt="Our workspace" />
                            </div>
                            <div className="grid-image small-1">
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&auto=format&fit=crop" alt="Design process" />
                            </div>
                            <div className="grid-image small-2">
                                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&auto=format&fit=crop" alt="Finished project" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do-section">
                <div className="what-we-do-container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-label">What We Do</span>
                        <h2 className="section-title">Our Expertise</h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <h3>Architecture Design</h3>
                            <p>Creating innovative architectural solutions that blend form and function seamlessly.</p>
                        </div>

                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h3>Interior Design</h3>
                            <p>Transforming spaces into beautiful, functional environments that inspire daily living.</p>
                        </div>

                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                </svg>
                            </div>
                            <h3>Custom Furniture</h3>
                            <p>Handcrafted furniture pieces designed to perfectly fit your space and style.</p>
                        </div>

                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                            </div>
                            <h3>3D Visualization</h3>
                            <p>Bringing your vision to life with photorealistic 3D renders before construction begins.</p>
                        </div>

                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                </svg>
                            </div>
                            <h3>Project Management</h3>
                            <p>End-to-end project coordination ensuring timely delivery and quality execution.</p>
                        </div>

                        <div className="service-card animate-on-scroll">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                </svg>
                            </div>
                            <h3>Consultation</h3>
                            <p>Expert advice and guidance to help you make informed design decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section with Creative Cards */}
            <section className="skills-section">
                <div className="skills-bg-elements">
                    <div className="skill-blob blob-1"></div>
                    <div className="skill-blob blob-2"></div>
                    <div className="floating-dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>

                <div className="skills-container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-label">Our Expertise</span>
                        <h2 className="section-title">Skills & Capabilities</h2>
                        <p className="section-description">
                            Mastering the art of design with cutting-edge expertise and creative excellence
                        </p>
                    </div>

                    <div className="skills-creative-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="skill-card-inner">
                                    {/* Icon Section */}
                                    <div className="skill-icon-wrapper">
                                        <div className="skill-icon-bg"></div>
                                        {index === 0 && (
                                            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                                <line x1="12" y1="17" x2="12" y2="21"></line>
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                            </svg>
                                        )}
                                        {index === 4 && (
                                            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M20 7h-9"></path>
                                                <path d="M14 17H5"></path>
                                                <circle cx="17" cy="17" r="3"></circle>
                                                <circle cx="7" cy="7" r="3"></circle>
                                            </svg>
                                        )}
                                        {index === 5 && (
                                            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                                <polyline points="2 17 12 22 22 17"></polyline>
                                                <polyline points="2 12 12 17 22 12"></polyline>
                                            </svg>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="skill-content">
                                        <h3 className="skill-card-title">{skill.name}</h3>
                                        <div className="skill-level-indicator">
                                            <div className="level-dots">
                                                {[...Array(5)].map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={`level-dot ${i < Math.floor(skill.percentage / 20) ? 'active' : ''}`}
                                                        style={{ animationDelay: `${i * 0.1}s` }}
                                                    ></span>
                                                ))}
                                            </div>
                                            <span className="skill-percentage-badge">{skill.percentage}%</span>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="skill-card-decoration">
                                        <div className="deco-line line-1"></div>
                                        <div className="deco-line line-2"></div>
                                        <div className="deco-circle"></div>
                                    </div>

                                    {/* Progress Arc */}
                                    <svg className="skill-arc" viewBox="0 0 200 100">
                                        <path
                                            className="arc-bg"
                                            d="M 20,80 Q 100,20 180,80"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.05)"
                                            strokeWidth="3"
                                        />
                                        <path
                                            className="arc-fill"
                                            d="M 20,80 Q 100,20 180,80"
                                            fill="none"
                                            stroke={skill.color}
                                            strokeWidth="3"
                                            strokeDasharray="240"
                                            strokeDashoffset={240 - (240 * skill.percentage / 100)}
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="team-container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-label">Our Team</span>
                        <h2 className="section-title">Meet The Experts</h2>
                        <p className="section-description">
                            Talented individuals working together to create extraordinary spaces
                        </p>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={member.id} className="team-card animate-on-scroll" style={{ transitionDelay: `${index * 0.15}s` }}>
                                <div className="team-image-wrapper">
                                    <img src={member.image} alt={member.name} />
                                    <div className="team-overlay">
                                        <div className="social-links">
                                            <a href="#" className="social-link">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a href="#" className="social-link">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-description">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <div className="timeline-bg-elements">
                    <div className="timeline-line"></div>
                </div>

                <div className="timeline-container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-label">Our Journey</span>
                        <h2 className="section-title">Company Timeline</h2>
                        <p className="section-description">
                            Milestones that shaped our journey to excellence
                        </p>
                    </div>

                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className={`timeline-item animate-on-scroll ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <div className="timeline-year">{item.year}</div>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                                <div className="timeline-dot"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
