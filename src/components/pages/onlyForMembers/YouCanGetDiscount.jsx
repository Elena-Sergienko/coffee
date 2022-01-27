import React from 'react';
import LinkToLogin from "../../router/LinkToLogin";

const YouCanGetDiscount = ({discount}) => {

    return (
        <div>
            {discount === 0 ?
                <span>
                    <hr/>
                    You can get discount,
                    <br/>
                    <LinkToLogin text={" please log in"}/>
                </span>
                :
                null
            }
        </div>
    );
};

export default YouCanGetDiscount;