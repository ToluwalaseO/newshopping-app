import React from 'react';
import WeeklyPopularItem from './WeeklyPopularItem';
import './WeeklyPopular.css';

const weeklyPopularItems = [
    { 
        name: 'VIVEFOX Headphones', 
        price: '$39.00', 
        image: "/Vivefox.png", 
        description: 'Wired Stereo Headsets With Mic.', 
        rating: 4, 
        number: "121"
    },
    { 
        name: 'JBL TUNE 600BTNC', 
        price: '$59.00', 
        image: "/JBL.png", 
        description: 'Premium Bone Conduction Open Ear Bluetooth.', 
        rating: 5, 
        number: "121" 
    },
    { 
        name: 'Wireless Earbuds, IPXB', 
        price: '$89.00', 
        image: "/ipx8.png", 
        description: 'Waterproof wireless earbuds with great sound.', 
        rating: 4, 
        number: "121" 
    },
    { 
        name: 'Airpods Max', 
        price: '$559.00', 
        image: "/airpodmaxs.png", 
        description: 'Flex Active Noise Cancelling Bluetooth.', 
        rating: 5, 
        number: "121"
    }
];

const WeeklyPopular = () => {
    return (
        <div className="weekly-popular">
            <div className="weekly-popular-header">
                <h1>Weekly Popular Products</h1>
            </div>
            <div className="weekly-popular-grid">
                {weeklyPopularItems.map((item, index) => (
                    <WeeklyPopularItem 
                        key={index} 
                        item={item}  
                    />
                ))}
            </div>
        </div>
    );
};

export default WeeklyPopular;