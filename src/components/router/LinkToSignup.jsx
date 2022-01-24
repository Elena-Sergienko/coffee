import React from 'react';
import {Link} from "react-router-dom";

const LinkToMenu = ({text}) => {
    return (
        <Link to="/signup" >{text}</Link>
    );
};

export default LinkToMenu;