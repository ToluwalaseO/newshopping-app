import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Popular from "./Popular"; 
import WeeklyPopular from "./WeeklyPopular";
import "./Header2.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const Header2 = () => {
    const [clickCount, setClickCount] = useState(0);
    const searchRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setClickCount(0); 
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getDropdownContent = () => {
        if (clickCount === 1) return <Popular />;
        if (clickCount === 2) return <WeeklyPopular />;
        return null;
    };
    const hidePage = clickCount > 0;

    // Function to handle ShopCart click
    const handleShopCartClick = () => {
        navigate("/"); // Navigate to the home route where Header2 is rendered
    };

    return (
        <div className="app-container">
            <header className="header2">
                <div className="header2-topbarsection">
                   
                    <div 
                        className="header-topbar2" 
                        onClick={handleShopCartClick} // Add click handler
                        style={{ cursor: 'pointer' }} // Add pointer cursor
                    >   
                        <ShoppingCartIcon />
                        <p>ShopCart</p>
                    </div>
                    
                    <p>Categories ▼</p>
                    <p>Deals</p>
                    <p>What's New</p>
                    <p>Delivery</p>

                    <div className="search-containerh2">
                        <div style={{ position: 'relative' }}>
                        <input
                        type="text"
                        placeholder="Search Product"
                        style={{ paddingLeft: '40px' }} 
                        />
                        <SearchIcon 
                        style={{
                            position: 'absolute',
                            left: '200px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#aaa'
                        }}
                        />
                    </div>
                    </div>

                    <button className="nav-button1"><PersonIcon style={{
                            position: 'absolute',
                            right: '365px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#aaa'
                        }}/> Account</button>
                    <button className="nav-button2"><ShoppingCartIcon style={{
                            position: 'absolute',
                            right: '200px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#aaa'}} /> Cart</button>
                </div>
            </header>

            {hidePage && (
                <div className="popular-dropdown">
                    {getDropdownContent()}
                </div>
            )}
        </div>
    );
};

export default Header2;