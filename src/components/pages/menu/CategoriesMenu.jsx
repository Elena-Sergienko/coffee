import React from 'react';
import MenuItem from "./MenuItem";

const CategoriesMenu = ({categories, addToOrder}) => {
    return (
        <div>
            {categories.map(subcategory =>
            <div key={subcategory.id}>
                <h4 style={{color: '#614200'}}>{subcategory.name}</h4>
                <MenuItem items={subcategory.items} addToOrder={addToOrder}/>
            </div>
            )}
        </div>
    );
};

export default CategoriesMenu;