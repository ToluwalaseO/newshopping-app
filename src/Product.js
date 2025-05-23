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
  { name: "Pink", hex: "#f4b5c2", image: "pinkairpods.png" },
  { name: "Green", hex: "#a2c3a4", image: "greenairpods.png" },
  { name: "Black", hex: "#444", image: "blackairpods.png" },
  { name: "Blue", hex: "#c7d5f3", image: "blueairpods.png" },
  { name: "Silver", hex: "#d0d0d0", image: "greyairpods.png" },
];

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const specifications = [
    
    [
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "AirPods Max" },
      { name: "Color", value: selectedColor.name },
      { name: "Weight", value: "384.8 grams" },
      { name: "Dimensions", value: "6.64 x 3.28 x 7.37 inches" },
      { name: "Material", value: "Aluminum, Stainless Steel" },
      { name: "Battery Life", value: "Up to 20 hours" },
    ],
    
    [
      { name: "Noise Cancellation", value: "Active Noise Cancellation" },
      { name: "Transparency Mode", value: "Yes" },
      { name: "Spatial Audio", value: "Yes with head tracking" },
      { name: "Bluetooth", value: "Version 5.0" },
      { name: "Microphones", value: "8 total" },
      { name: "Warranty", value: "1 Year Limited" },
      { name: "Water Resistance", value: "Sweat resistant" },
    ]
  ];

  const handleQuantityChange = (type) => {
    setQuantity(prev => type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  const navigate = useNavigate();

  const renderRating = () => {
    return Array(5).fill().map((_, i) => (
      <StarIcon key={i} style={{ color: '#ffb400', fontSize: '1.2rem' }} />
    ));
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-grid">
          
          <div className="product-image-section">
            <img
              src={`./${selectedColor.image}`}
              alt={`AirPods Max in ${selectedColor.name}`}
              className="product-image"
            />
            <div className="color-selector">
              <p className="color-label">Color: {selectedColor.name}</p>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-swatch ${
                      selectedColor.name === color.name ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleColorSelect(color)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
          </div>

          
          <div className="product-details-section">
            <h1 className="product-title">AirPods Max - {selectedColor.name}</h1>
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
              onClick={() => navigate("/buy", { state: { quantity, color: selectedColor.name } })}
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

            
            <div className="specs-table-container">
              <h3 className="specs-table-title">Product Specifications</h3>
              <div className="specs-table">
                {specifications.map((column, colIndex) => (
                  <div key={colIndex} className="specs-column">
                    {column.map((spec, index) => (
                      <div key={index} className="spec-row">
                        <div className="spec-name">{spec.name}</div>
                        <div className="spec-value">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;