import React from 'react';

const Subtotal = ({subtotal, tax, tips, discount}) => {
    return (
        <div>

            <div>
                Subtotal: ${subtotal}
            </div>

            {discount ?
                <div>Discount: -${discount}</div>
                : null
            }

            {tips
                ?
                <div>Tips ${tips}</div>
                :
                null
            }
            <div>
                Tax (10%): ${tax}
            </div>
        </div>
    );
};


export default Subtotal;