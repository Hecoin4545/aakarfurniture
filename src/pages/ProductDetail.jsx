import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData[id];

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product Not Found</h2>
                <button onClick={() => navigate('/')} className="back-home-btn">
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div className="product-detail-page">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
                <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
                <span className="breadcrumb-separator">/</span>
                <span onClick={() => navigate('/')} className="breadcrumb-link">Products</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{product.name}</span>
            </div>

            <div className="product-detail-container">
                {/* Image Gallery Section */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="main-product-image"
                        />
                        <div className="image-badge">
                            {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}% OFF
                        </div>
                    </div>
                    <div className="thumbnail-gallery">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={image} alt={`${product.name} view ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Information Section */}
                <div className="product-info">
                    <div className="product-header">
                        <span className="product-category">{product.category}</span>
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-rating">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
                        </div>
                    </div>

                    <div className="price-section">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price-detail">{product.originalPrice}</span>
                        <span className="savings">
                            Save ${parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))}
                        </span>
                    </div>

                    <p className="product-description">{product.description}</p>

                    {/* Color Selection */}
                    <div className="color-selection">
                        <h3>Available Colors</h3>
                        <div className="color-options">
                            {product.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-option ${selectedColor === index ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(index)}
                                >
                                    <div
                                        className="color-swatch"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <span className="color-name">{color.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="quantity-section">
                        <h3>Quantity</h3>
                        <div className="quantity-selector">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="qty-btn"
                            >
                                -
                            </button>
                            <span className="qty-display">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="qty-btn"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button className="add-to-cart-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Add to Cart
                        </button>
                        <button className="wishlist-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="additional-info">
                        <div className="info-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Free shipping on orders over $500</span>
                        </div>
                        <div className="info-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="23 4 23 10 17 10"></polyline>
                                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                            </svg>
                            <span>30-day return policy</span>
                        </div>
                        <div className="info-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span>Secure checkout</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Specifications */}
            <div className="product-specifications">
                <div className="spec-section">
                    <h2>Key Features</h2>
                    <ul className="features-list">
                        {product.features.map((feature, index) => (
                            <li key={index}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="spec-section">
                    <h2>Dimensions</h2>
                    <div className="dimensions-grid">
                        {Object.entries(product.dimensions).map(([key, value]) => (
                            <div key={key} className="dimension-item">
                                <span className="dimension-label">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                                <span className="dimension-value">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="spec-section">
                    <h2>Materials & Care</h2>
                    <div className="materials-care">
                        <div className="material-info">
                            <h3>Materials</h3>
                            <p>{product.materials}</p>
                        </div>
                        <div className="care-info">
                            <h3>Care Instructions</h3>
                            <p>{product.careInstructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
