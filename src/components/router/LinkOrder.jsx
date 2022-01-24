import React from 'react';
import {Link} from "react-router-dom";

const LinkToOrder = ({text}) => {
    return (
        <Link to="/order" >{text}</Link>
    );
};

export default LinkToOrder;