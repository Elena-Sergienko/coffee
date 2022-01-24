import React from 'react';
import logo from "../../../static/img/IMG-20220119-WA0047.jpg";

const MenuHeader = () => {
    return (
        <div>
            <span className="text" style={{paddingLeft: 240, fontSize: 70}} >Menu</span>
            <img style={{width: 130, height: 'auto', paddingLeft: 80}} src={logo}/>
        </div>
    );
};

export default MenuHeader;