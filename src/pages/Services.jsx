import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Interior Design",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
            description: "Our interior design service focuses on creating harmonious spaces that reflect your lifestyle. We handle everything from color palettes and furniture selection to lighting design and spatial planning. Our goal is to transform your vision into a stunning reality that balances aesthetics with functionality.",
            features: ["Spatial Planning", "Color Consultation", "Lighting Design", "Furniture Selection"]
        },
        {
            id: 2,
            title: "Custom Furniture",
            image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000",
            description: "Experience the luxury of furniture designed exclusively for you. Our craftsmen use premium materials to build pieces that fit your space perfectly. Whether it's a statement sofa, a grand dining table, or clever storage solutions, we ensure every detail meets our high standards of quality and design.",
            features: ["Bespoke Design", "Premium Materials", "Exquisite Craftsmanship", "Perfect Fit"]
        },
        {
            id: 3,
            title: "Architecture",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
            description: "Our architectural team designs structures that are both innovative and sustainable. We take a holistic approach, considering the environment, the site, and your specific needs. From initial concept to final construction, we provide detailed plans and oversight to ensure architectural excellence.",
            features: ["Concept Development", "Sustainable Design", "Site Analysis", "Construction Oversight"]
        },
        {
            id: 4,
            title: "3D Visualization",
            image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000",
            description: "See your project come to life before a single brick is laid. Our photorealistic 3D renders allow you to explore every corner of your future space. This visual clarity helps in making informed decisions about materials, textures, and layouts, saving time and resources during the construction phase.",
            features: ["Photorealistic Renders", "Virtual Tours", "Material Simulations", "Lighting Analysis"]
        },
        {
            id: 5,
            title: "Project Management",
            image: "https://images.unsplash.com/photo-1454165833762-02c3326792da?auto=format&fit=crop&q=80&w=1000",
            description: "We take the stress out of design and construction through meticulous project management. Our team coordinates with contractors, manages timelines, and oversees budgets to ensure your project is completed on time and within scope. We are your single point of contact for peace of mind.",
            features: ["Timeline Management", "Budget Control", "Contractor Coordination", "Quality Assurance"]
        },
        {
            id: 6,
            title: "Home Decor",
            image: "https://images.unsplash.com/photo-1513519247388-193ad51f507e?auto=format&fit=crop&q=80&w=1000",
            description: "The right decor pieces can breathe life into any room. Our curators help you select accessories, artwork, and textiles that complement your interior design. We specialize in adding those final touches that make a house feel like a home, reflecting your personality in every detail.",
            features: ["Art Curation", "Textile Selection", "Accessory Styling", "Atmosphere Creation"]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Animating service card:', entry.target);
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0 });

        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));

        return () => animateElements.forEach(el => observer.unobserve(el));
    }, []);

    const openPopup = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setSelectedService(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="services-page">
            <section className="services-banner">
                <div className="banner-bg-elements">
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>
                    <div className="bg-grid"></div>
                </div>
                <div className="banner-content">
                    <span className="banner-subtitle">Our Expertise</span>
                    <h1 className="banner-title">Elevating Spaces Through Design</h1>
                    <div className="banner-accent"></div>
                </div>
            </section>

            <section className="what-we-do-grid-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-label">Solutions</span>
                        <h2 className="section-title">What We Do</h2>
                    </div>

                    <div className="services-visual-grid">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="service-visual-card animate-on-scroll"
                                style={{ transitionDelay: `${index * 0.1}s` }}
                                onClick={() => openPopup(service)}
                            >
                                <div className="card-image-content">
                                    <img src={service.image} alt={service.title} />
                                    <div className="card-overlay">
                                        <h3>{service.title}</h3>
                                        <div className="card-cta">
                                            <span>Learn More</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedService && (
                <div className="service-modal-overlay" onClick={closePopup}>
                    <div className="service-modal" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closePopup}>&times;</button>
                        <div className="modal-layout">
                            <div className="modal-image">
                                <img src={selectedService.image} alt={selectedService.title} />
                            </div>
                            <div className="modal-info">
                                <h2>{selectedService.title}</h2>
                                <p className="modal-description">{selectedService.description}</p>
                                <div className="modal-features">
                                    {selectedService.features.map((feature, i) => (
                                        <div key={i} className="feature-item">
                                            <span className="feature-dot"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <button className="modal-contact-btn" onClick={() => navigate('/contact')}>
                                    Contact Us
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13"></path>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
