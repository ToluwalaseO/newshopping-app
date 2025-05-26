import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';

const ListingItem = ({ item }) => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = React.useState(false);

    // Handle click on the main container
    const handleContainerClick = (e) => {
        if (!e.target.closest('.add-to-favorites') && !e.target.closest('.add-to-cart')) {
            navigate(`/product/${item.id}`);
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
        navigate(`/product/${item.id}`);
    };

    return (
        <div 
            className="listing-item" 
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
                className="listing-item-image"
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
                            <StarIcon key={i} color= "#4CAF50" />
                        ) : (
                            <StarBorderIcon key={i} color="#4CAF50" />
                        )
                    ))}
                </div>
                <span className="item-number">({item.number})</span>
            </div>
            
            <button onClick={handleAddToCartClick} className="add-to-cart">Add to Cart</button> 
        </div>
    );
};

export default ListingItem;