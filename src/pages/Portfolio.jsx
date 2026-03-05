import React, { useState } from 'react';
import './Portfolio.css';
import portfolioImg1 from '../assets/Atit 2 projects-27.jpg';
import portfolioImg2 from '../assets/Atit 2 projects-28.jpg';
import portfolioImg3 from '../assets/Atit 2 projects-29.jpg';
import portfolioImg4 from '../assets/Atit 2 projects-30.jpg';
import portfolioImg5 from '../assets/Atit 2 projects-31.jpg';
import portfolioImg6 from '../assets/Atit 2 projects-32.jpg';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const portfolioProjects = [
        {
            id: 1,
            title: "The Grey House",
            category: "RESIDENCE",
            image: portfolioImg1,
            description: "A modern residential project featuring minimalist design principles with warm wooden accents and contemporary furnishings. The space emphasizes natural light and open-plan living.",
            location: "Surat, Gujarat",
            year: "2023",
            area: "2,400 sq ft"
        },
        {
            id: 2,
            title: "Urban Boutique",
            category: "COMMERCIAL",
            image: portfolioImg2,
            description: "A vibrant retail space designed to showcase fashion with optimal lighting and display arrangements. Features custom shelving and a welcoming atmosphere.",
            location: "Mumbai, Maharashtra",
            year: "2023",
            area: "1,800 sq ft"
        },
        {
            id: 3,
            title: "Serene Living",
            category: "RESIDENCE",
            image: portfolioImg3,
            description: "Contemporary residential interior with a focus on comfort and functionality. Incorporates natural materials and a neutral color palette.",
            location: "Ahmedabad, Gujarat",
            year: "2024",
            area: "3,200 sq ft"
        },
        {
            id: 4,
            title: "Tech Hub Office",
            category: "OFFICE",
            image: portfolioImg4,
            description: "Modern office space designed for productivity and collaboration. Features open workstations, meeting pods, and recreational areas.",
            location: "Pune, Maharashtra",
            year: "2023",
            area: "5,000 sq ft"
        },
        {
            id: 5,
            title: "Heritage Villa",
            category: "ARCHITECTURE",
            image: portfolioImg5,
            description: "Architectural masterpiece blending traditional elements with modern amenities. Features custom stonework and landscaped gardens.",
            location: "Jaipur, Rajasthan",
            year: "2022",
            area: "6,500 sq ft"
        },
        {
            id: 6,
            title: "Cozy Apartment",
            category: "RESIDENCE",
            image: portfolioImg6,
            description: "Compact yet stylish apartment interior maximizing space efficiency. Smart storage solutions and multi-functional furniture.",
            location: "Bangalore, Karnataka",
            year: "2024",
            area: "1,200 sq ft"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all'
        ? portfolioProjects
        : portfolioProjects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

    return (
        <div className="portfolio-page">
            {/* Banner Section */}
            <section className="portfolio-banner">
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
                    <span className="banner-subtitle">Our Portfolio</span>
                    <h1 className="banner-title">Explore our exquisite collection of furniture designs.</h1>
                    <div className="banner-accent-line"></div>
                </div>
            </section>

            {/* Category Filter Section */}
            <section className="portfolio-catalog-section">
                <div className="catalog-container">
                    {/* Animated Background Accent */}
                    <div className="catalog-bg-accent"></div>

                    {/* Filter Tabs */}
                    <div className="filter-tabs">
                        <button
                            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            ALL
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'architecture' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('architecture')}
                        >
                            ARCHITECTURE
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'commercial' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('commercial')}
                        >
                            COMMERCIAL
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'office' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('office')}
                        >
                            OFFICE
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'residence' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('residence')}
                        >
                            RESIDENCE
                        </button>
                        <div className="filter-pagination">
                            <span>{filteredProjects.length} / {portfolioProjects.length}</span>
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="portfolio-masonry-grid">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="portfolio-card"
                                onClick={() => openModal(project)}
                            >
                                <div className="card-image-wrapper">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="card-overlay">
                                        <div className="overlay-content">
                                            <h3>{project.title}</h3>
                                            <p>{project.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Popup */}
            {selectedProject && (
                <div className="portfolio-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="modal-layout">
                            <div className="modal-image-section">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="modal-info-section">
                                <span className="modal-category">{selectedProject.category}</span>
                                <h2>{selectedProject.title}</h2>
                                <p className="modal-description">{selectedProject.description}</p>

                                <div className="modal-details">
                                    <div className="detail-item">
                                        <span className="detail-label">Location</span>
                                        <span className="detail-value">{selectedProject.location}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Year</span>
                                        <span className="detail-value">{selectedProject.year}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Area</span>
                                        <span className="detail-value">{selectedProject.area}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
