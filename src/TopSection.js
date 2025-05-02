import React from "react";
import "./TopSection.css";
// import { useNavigate } from 'react-router-dom';


const TopSection = () => {
    // const navigate = useNavigate()
    return (
        <header className="topsectionpage">
            <div className="topsectionpage-topbar"> 
                
            <div className="topsectionpage-image">
                
            <img src="/newimage.png" alt="iconlogo" height={290} width={290} />
            </div>
            <div className="topsectionpage-topbar2">
                
            <h1>Grab Upto 50% Off On</h1>
            <h1>Selected Headphone</h1>
            {/* <button  onClick={() => navigate("/Buy") }>Buy now</button> */}
            </div>
            
            </div>
        </header>
    );
}

export default TopSection;