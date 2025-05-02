import React from "react";
import "./header3.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TuneIcon from '@mui/icons-material/Tune';

const Header3 = () => {
    return (
        <header className="header3">
            <div className="header3-topbar">
                <p>Headphone Type <ArrowDropDownIcon /></p>
                <p>Price <ArrowDropDownIcon /></p>
                <p>Review <ArrowDropDownIcon /></p>
                <p>Color <ArrowDropDownIcon /></p>
                <p>Material <ArrowDropDownIcon /></p>
                <p>Offer <ArrowDropDownIcon /></p>
                <p>All Filters <TuneIcon /></p> 
                <div className="header3-sortby">
                    <p>Sort by <ArrowDropDownIcon /></p>
                </div>
            </div>
        </header>
    );
}

export default Header3;