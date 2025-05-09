import React from 'react';

const PopularItem = ({ item }) => { 
    return (
        <div className="store-popular-item">
            <img src={item.image} alt={item.name} className="store-popular-item-image" />
            <h2 className="store-popular-item-name">{item.name}</h2>
            <div className="store-popular-item-description">{item.description}</div> 
        </div>
    );
};

export default PopularItem;
