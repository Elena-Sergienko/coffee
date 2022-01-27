import React from 'react';
import MyButton from "../../UI/button/MyButton";

const OrderList = ({order, addToOrder, subtractFromOrder, deleteOrderRow}) => {


    return (
        <div>
            <span className="text" style={{paddingBottom: 0}}>Order:</span>
            {order.map(item =>
                <div key={item.id}>
                    {item.name} - {' '}
                    ${item.price}
                    <MyButton onClick={() => addToOrder(item.id)}>+</MyButton>
                    {item.count}
                    <MyButton onClick={() => subtractFromOrder(item.id)}>-</MyButton>
                    <MyButton onClick={() => deleteOrderRow(item.id)}>Delete</MyButton>
                </div>
            )}

        </div>
    );
};

export default OrderList;