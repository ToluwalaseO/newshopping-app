import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const WeeklyPopularItem = ({ item }) => {
    const [isFavorite, setIsFavorite] = React.useState(false);

    return (
        <div className="weekly-popular-item">
            <button 
                className="add-to-favorites"
                onClick={() => setIsFavorite(!isFavorite)}
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
        </div>
    );
};

export default WeeklyPopularItem;