import React from 'react';
import PopularItem from './PopularItem';
import './Popular.css';

const popularItems = [ 
    { image: "/Furniture.png", name: 'Furniture', description: '240 items' },
    { image: "/ipx8.png", name: 'Headphones', description: '240 items' },
    { image: "/Shoe.png", name: 'Shoe', description: '240 items' },
    { image: "/Bag.png", name: 'Bag', description: '240 items' },
    { image: "/Laptop.png", name: 'Laptop', description: '240 items' },
    { image: "/Book.png", name: 'Book', description: '240 items' },
];

const Popular = () => {
    return (
        <section className="popular-section">
            <div className="section-header">
                <h2>Popular Categories</h2>
            </div>
            <div className="popular-grid">
                {popularItems.map((item, index) => (
                    <PopularItem key={index} item={item} /> 
                ))}
            </div>
        </section>
    );
};

export default Popular;