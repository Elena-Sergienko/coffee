import React from 'react';

const Done = ({firstName}) => {

    const date = new Date();

    return (
        <div>
            <h2>See you soon, {firstName}!</h2>
            <hr/>
            Your order will be ready in 15 minutes!
            <br/>
            <h3>Estimated pickup is {' '}
            <span style={{color: 'red'}}>{date.getHours()}:{date.getMinutes() + 15}</span>
            </h3>
        </div>
    );
};

export default Done;