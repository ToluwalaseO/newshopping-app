import React from "react";
import "./Header.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    return (
        <header className="header">
            <div className="header-topbar">
                <p className="header-number">
                    <LocalPhoneIcon style={{ fontSize: '8px' }} />+001234567890
                </p>
                <p className="header-title">Get 50% off on Selected Items &nbsp;|&nbsp; Shop Now</p>
                <div className="header-right">
                    <p className="header-language">
                        Eng
                        <ArrowDropDownIcon style={{ fontSize: '8px' }} />
                    </p>
                    <p className="header-location">
                        Location
                        <ArrowDropDownIcon style={{ fontSize: '8px' }} />
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Header;
