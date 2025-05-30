import React from "react";
import './Homepage.css'




const Homepage = () => {
    
    return (
        <header className="homepage" style={{ 
            backgroundImage: "url('backGrAnd.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%'
        }}>
            <div className="homepage-title"> 
                <h1>Shopping And</h1>
                <h1>Department Store.</h1>
              </div>  
            <div className="homepage-description">
                <p>Shopping is a bit relaxing hobby for me, which</p>
                <p>is sometimes troubling for the bank balance</p>
                </div>
            <div className="homepage-button">
                <button>Learn More</button>
            </div>
        </header>
    );
}

export default Homepage;