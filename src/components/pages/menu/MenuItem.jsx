import React from 'react';
import MyButton from "../../UI/button/MyButton";

const MenuItem = ({items, addToOrder}) => {


    return (
        <div>
            {items.map(item =>
            <div key={item.id}>
                {item.name} - ${item.price}
                <MyButton onClick={() => addToOrder(item.id)}>Add to order</MyButton>
            </div>)}

        </div>
    );
};

export default MenuItem;