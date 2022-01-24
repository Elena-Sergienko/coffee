import React from 'react';
import MyButton from "../../UI/button/MyButton";

const OrderList = ({order}) => {
    return (
        <div>
            <span className="text" style={{paddingBottom: 0}}>Order:</span>
            {order.map(item =>
                <div key={item.id}>
                    {item.name}
                    <MyButton>+</MyButton>
                    <MyButton>-</MyButton>
                    <MyButton>Delete</MyButton>
                    ${item.price}
                </div>
            )}

        </div>
    );
};

export default OrderList;