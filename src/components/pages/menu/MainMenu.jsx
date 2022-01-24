import React from 'react';
import CategoriesMenu from "./CategoriesMenu";
import YourOrder from "../../UI/yourOrder/YourOrder";
import MenuHeader from "./MenuHeader";

const MainMenu = ({menu, addToOrder, total, reset, countInBag, discount}) => {
    return (
        <div>
            <YourOrder total={total} reset={reset} countInBag={countInBag} discount={discount}/>
            <MenuHeader />

            <div>
                {menu.map(el =>
                    <div key={el.id}>
                        <h2 style={{color: '#691c1c', background: '#f2d675'}}>{el.name}</h2>
                        <CategoriesMenu categories={el.categories} addToOrder={addToOrder}/>
                    </div>
                )}
            </div>

        </div>
    );
};

export default MainMenu;