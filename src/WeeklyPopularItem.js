import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';

const WeeklyPopularItem = ({ item }) => {
    const [isFavorite, setIsFavorite] = React.useState(false);
    const navigate = useNavigate();

    // Handle click on the main container
    const handleContainerClick = (e) => {
        // Only navigate if the click wasn't on the favorite button or add to cart button
        if (!e.target.closest('.add-to-favorites') && !e.target.closest('.add-to-cart')) {
            navigate("/product");
        }
    };

    // Prevent event bubbling for favorite button
    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    // Prevent event bubbling for add to cart button
    const handleAddToCartClick = (e) => {
        e.stopPropagation();
        navigate("/product");
    };

    return (
        <div 
            className="weekly-popular-item" 
            onClick={handleContainerClick}
            style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickability
        >
            <button 
                className="add-to-favorites"
                onClick={handleFavoriteClick}
            >
                {isFavorite ? (
                    <FavoriteIcon color="error" />
                ) : (
                    <FavoriteBorderIcon />
                )}
            </button>
            
            <img 
                src={item.image} 
                alt={item.name} 
                className="weekly-popular-image"
                style={{
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            
            <div className="item-name-price">
                <h2 className="item-name">{item.name}</h2>
                <div className="item-price">{item.price}</div>
            </div>
            
            <div className="item-description">{item.description}</div>
            
            <div className="star-rating-number">
                <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                        i < item.rating ? (
                            <StarIcon key={i} color="#4CAF50" />
                        ) : (
                            <StarBorderIcon key={i} color="#4CAF50" />
                        )
                    ))}
                </div>
                <span className="item-number">({item.number})</span>
            </div>

            <button 
                onClick={handleAddToCartClick} 
                className="add-to-cart"
                style={{
                    width: '100%',
                    padding: '0.5rem',
                    background: 'white',
                    color: 'black',
                    border: '2px solid black',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    width: '120px'
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default WeeklyPopularItem;