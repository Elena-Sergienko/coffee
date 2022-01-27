import React from 'react';
import MyButton from "../../UI/button/MyButton";
import YouCanGetDiscount from "../onlyForMembers/YouCanGetDiscount";

const Order = ({getTips, tips, discount}) => {
    return (
        <div>
            Tips
            <MyButton style={{backgroundColor: 'yellowgreen'}} onClick={() => getTips(10)}>10%</MyButton>
            <MyButton style={{background: 'yellowgreen'}} onClick={() => getTips(15)}>15%</MyButton>
            <MyButton style={{background: 'yellowgreen'}} onClick={() => getTips(20)}>20%</MyButton>
            {/*<input type="number"/>%*/}
            {tips
                ?
                <div style={{color: 'red'}}>Tips added. Thank you!
                    <YouCanGetDiscount discount={discount}/>
                </div>
                :
                null
            }
        </div>
    );
};

export default Order;