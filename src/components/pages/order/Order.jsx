import React from 'react';
import MyButton from "../../UI/button/MyButton";
import Tips from "./Tips";
import OrderList from "./OrderList";
import Subtotal from "./Subtotal";
import {Link} from "react-router-dom";

const Order = ({order, discount, subtotal, total, tax, getTips, tips}) => {

    return (
        <div>
            <OrderList order={order}/>
            <hr/>
            <Subtotal subtotal={subtotal} tax={tax} tips={tips} discount={discount}/>
            <Tips getTips={getTips} tips={tips} discount={discount}/>

            <hr/>

            <div style={{fontSize: 30, color: 'brown'}}>
                Total ${total}
            </div>

            <Link to="/done" className="linkText">
                <MyButton style={{background: 'green'}}>Checkout</MyButton>
            </Link>


            {/*<div className="top"/> */}

            {discount ?
                <div>Discount was added!</div>
                :
                null
            }
        </div>
    );
};

export default Order;