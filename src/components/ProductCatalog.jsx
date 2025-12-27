import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';
import './ProductCatalog.css';

const ProductCatalog = () => {
    const scrollContainer = useRef(null);
    const navigate = useNavigate();

    const scroll = (direction) => {
        const { current } = scrollContainer;
        if (current) {
            const scrollAmount = 350; // Width of card + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <section className="catalog-section">
            <div className="catalog-bg-animation">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
            </div>

            <div className="catalog-container-wrapper">
                <div className="catalog-header">
                    <div>
                        <h2 className="catalog-title">Shop our bestsellers</h2>
                        <p className="catalog-subtitle">Curated pieces for your home</p>
                    </div>
                    <a href="/portfolio" className="view-all-link">View all Products</a>
                </div>

                <div className="catalog-container">
                    <button className="nav-arrow left-arrow" onClick={() => scroll('left')} aria-label="Scroll Left">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="product-carousel" ref={scrollContainer}>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="product-card"
                                onClick={() => handleProductClick(product.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                    <div className="product-colors">
                                        {product.colors.map((color, index) => (
                                            <div
                                                key={index}
                                                className="color-dot"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                        <span className="plus-more">+ More</span>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-price">
                                        <span className="original-price">{product.originalPrice}</span>
                                        <span className="sale-price">{product.price}</span>
                                    </div>
                                    <div className="card-arrow">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-arrow right-arrow" onClick={() => scroll('right')} aria-label="Scroll Right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
