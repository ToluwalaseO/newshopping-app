import React, { useState } from "react";
import './Product.css';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const colors = [
  { name: "Pink", hex: "#f4b5c2" },
  { name: "Green", hex: "#a2c3a4" },
  { name: "Black", hex: "#444" },
  { name: "Blue", hex: "#c7d5f3" },
  { name: "Silver", hex: "#d0d0d0" },
];

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuantityChange = (type) => {
    setQuantity(prev => type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
    // Add your cart logic here
  };

  const navigate = useNavigate();

  // Create star rating (5 stars)
  const renderRating = () => {
    const stars = [];
    const filledStars = 5; // Assuming 5-star rating
    const emptyStars = 0;
    
    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarIcon key={`filled-${i}`} style={{ color: '#ffb400', fontSize: '1.2rem' }} />);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarBorderIcon key={`empty-${i}`} style={{ color: '#ffb400', fontSize: '1.2rem' }} />);
    }
    
    return stars;
  };

  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-grid">
          {/* Image Section */}
          <div className="product-image-section">
            <img
              src="./airpodmaxs.png" 
              alt={`AirPods Max in ${selectedColor}`}
              className="product-image"
            />
            <div className="color-selector">
              <p className="color-label">Color: {selectedColor}</p>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-swatch ${
                      selectedColor === color.name ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="product-details-section">
            <h1 className="product-title">AirPods Max - {selectedColor}</h1>
            <p className="product-price">$549.00</p>
            <p className="product-rating">
              {renderRating()} (127 reviews)
            </p>
            
            <div className="product-description">
              <p>A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.</p>
            </div>

            <div className="quantity-selector">
              <label htmlFor="quantity" className="quantity-label">Quantity</label>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange("decrement")}
                  aria-label="Decrease quantity"
                >
                  <RemoveIcon style={{ fontSize: '1rem' }} />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange("increment")}
                  aria-label="Increase quantity"
                >
                  <AddIcon style={{ fontSize: '1rem' }} />
                </button>
              </div>
            </div>

            <p className="stock-info">
              {quantity > 5 
                ? "In Stock" 
                : `Only ${12 - quantity} left! Don't miss it.`}
            </p>

            <div className="action-buttons">
              <button 
                onClick={() => navigate("/checkout", { state: { quantity, color: selectedColor } })}
                className="buy-now-button"
              >
                Buy Now
              </button>
              <button 
                onClick={handleAddToCart}
                className={`add-to-cart-button ${isAddingToCart ? "adding" : ""}`}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? "Added!" : "Add to Cart"}
              </button>
            </div>

            <div className="delivery-info">
              <div className="delivery-item">
                <LocalShippingIcon style={{ fontSize: '1.2rem', color: '#555' }} />
                <span>Free Delivery: Enter postal code for availability</span>
              </div>
              <div className="delivery-item">
                <AssignmentReturnIcon style={{ fontSize: '1.2rem', color: '#555' }} />
                <span>Free 30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;