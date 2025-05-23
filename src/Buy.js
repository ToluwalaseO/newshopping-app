import React, { useState } from "react";
import "./Buy.css";

const Buy = () => {
    const [isReturningCustomer, setIsReturningCustomer] = useState(false);
    const [deliveryInfo, setDeliveryInfo] = useState({
        name: "James Frosh",
        address: "123, Frosh Street, Opebi",
        city: "Ikeja",
        zipCode: "101021",
        mobile: "+23482318321",
        email: "jamesfrosh@realmail.com"
    });
    const [editMode, setEditMode] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="checkout-container">
            <div className="checkout-main">
                <div className="checkout-section review-section">
                    <h2 className="section-title">Review Items And Shipping</h2>
                    <div className="product-info">
                        <div className="product-image-container">
                            <img 
                                src="/airpodmaxs.png" 
                                alt="AirPods Max Pink"
                                className="product-image"
                            />
                        </div>
                        <h3 className="product-name">AirPods- Max</h3>
                        <p className="product-price">$549.00</p>
                        <p className="product-detail"><span>Color:</span> Pink</p>
                        <p className="product-detail"><span>Quantity:</span> 4</p>
                    </div>
                </div>

                <div className="checkout-section delivery-section">
                    <div className="section-header">
                        <h2 className="section-title">Delivery Information</h2>
                        <div className="delivery-buttons">
                            <button 
                                className="returning-customer-button"
                                onClick={() => setIsReturningCustomer(!isReturningCustomer)}
                            >
                                {isReturningCustomer ? "New Customer" : "Returning Customer"}
                            </button>
                            {isReturningCustomer && (
                                <button 
                                    className="edit-button" 
                                    onClick={() => setEditMode(!editMode)}
                                >
                                    {editMode ? "Save" : "Edit Information"}
                                </button>
                            )}
                        </div>
                    </div>
                    
                    {isReturningCustomer ? (
                        editMode ? (
                            <div className="delivery-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={deliveryInfo.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input 
                                        type="text" 
                                        name="address"
                                        value={deliveryInfo.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input 
                                        type="text" 
                                        name="city"
                                        value={deliveryInfo.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Zip Code</label>
                                    <input 
                                        type="text" 
                                        name="zipCode"
                                        value={deliveryInfo.zipCode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input 
                                        type="text" 
                                        name="mobile"
                                        value={deliveryInfo.mobile}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={deliveryInfo.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="delivery-details">
                                <p><span>Name:</span> {deliveryInfo.name}</p>
                                <p><span>Address:</span> {deliveryInfo.address}</p>
                                <p><span>City:</span> {deliveryInfo.city}</p>
                                <p><span>Zip Code:</span> {deliveryInfo.zipCode}</p>
                                <p><span>Mobile:</span> {deliveryInfo.mobile}</p>
                                <p><span>Email:</span> {deliveryInfo.email}</p>
                            </div>
                        )
                    ) : (
                        <div className="delivery-form">
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Address*</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>City*</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Zip Code*</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Mobile*</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Email*</label>
                                <input type="email" required />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            
            <div className="checkout-section summary-section">
                <h2 className="section-title">Order Summary</h2>
                
                <div className="coupon-group">
                    <input type="text" placeholder="Enter Coupon Code" className="coupon-input"/>
                    <button className="coupon-button">Apply Coupon</button>
                </div>
                
                <div className="payment-section">
                    <h3 className="payment-title">Payment Details</h3>
                    <ul className="payment-methods">
                        <li>Cash on Delivery</li>
                        <li>Shopcart Card</li>
                        <li>PayPal</li>
                        <li>Credit or Debit Card</li>
                    </ul>
                    
                    <div className="card-brands">
                        <img src="/amazon.png" alt="Amazon" />
                        <img src="/maatercard.png" alt="MasterCard" />
                        <img src="/visa.png" alt="Visa" />
                    </div>
                </div>
                
                <div className="payment-form">
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" placeholder="Type Here" className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cardholder">CardHolder Name*</label>
                        <input type="text" id="cardholder" placeholder="Type Here" className="form-input"/>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="expiry">Expiry</label>
                            <input type="text" id="expiry" placeholder="MM/YY" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvc">CVC</label>
                            <input type="text" id="cvc" placeholder="XXX" className="form-input"/> 
                        </div>
                    </div>
                </div>

                <button className="checkout-button">Complete Purchase</button>
            </div>
        </div>
    );
};

export default Buy;