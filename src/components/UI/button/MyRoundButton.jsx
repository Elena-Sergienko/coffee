import React from 'react';
import classes from './MyRoundButton.module.css'


const MyRoundButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.roundBtn}>
            {children}
        </button>
    );
};

export default MyRoundButton;