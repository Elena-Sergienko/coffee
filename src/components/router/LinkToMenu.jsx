import React from 'react';
import {Link} from "react-router-dom";

const LinkToMenu = () => {
    return (
        <Link to="/menu" className="linkText">Go to Menu ☕</Link>
    );
};

export default LinkToMenu;