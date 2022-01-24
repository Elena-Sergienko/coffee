import React from 'react';
import {Link} from "react-router-dom";
import '../../../App.css';

const Navbar = ({auth}) => {
    return (
        <nav className="header">
            <div className="header_color">

                {auth ?
                    <Link to="/member" className="linkText_only_for_members"> Only for Member |</Link>
                    :
                    null
                }

                <Link to="/" className="linkText"> Home |</Link>
                <Link to="/menu" className="linkText"> Menu |</Link>
                <Link to="/order" className="linkText"> Order |</Link>
                <Link to="/login" className="linkText"> Login |</Link>
                <Link to="/signup" className="linkText"> Sign up</Link>
            </div>
        </nav>
    );
};

export default Navbar;