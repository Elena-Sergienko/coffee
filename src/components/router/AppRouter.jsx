import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import MainMenu from "../pages/menu/MainMenu";
import Order from "../pages/order/Order";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import OnlyForMembers from "../pages/onlyForMembers/OnlyForMembers";
import Done from "../pages/order/Done";

const AppRouter = ({auth, login, menu, addToOrder, subtractFromOrder, deleteOrderRow, discount, getDiscount, countInBag, order, subtotal, total, tax, reset, getTips, tips, firstName, getUserData}) => {
    return (
        <Routes>
            <Route path={"/"} element={<Home total={total} reset={reset} countInBag={countInBag}/>}/>
            <Route path={"/menu"} element={<MainMenu menu={menu} addToOrder={addToOrder} total={total} reset={reset} countInBag={countInBag} discount={discount}/>}/>
            <Route path={"/order"} element={<Order order={order} discount={discount} subtotal={subtotal} total={total} tax={tax} getTips={getTips} tips={tips} addToOrder={addToOrder} subtractFromOrder={subtractFromOrder} deleteOrderRow={deleteOrderRow}/>}/>
            <Route path={"/login"} element={<Login auth={auth} login={login} />}/>
            <Route path={"/signup"} element={<SignUp getUserData={getUserData}/>}/>
            <Route path={"/member"} element={<OnlyForMembers getDiscount={getDiscount} discount={discount}/>}/>
            <Route path={"/done"} element={<Done firstName={firstName}/>}/>

        </Routes>
    );
};

export default AppRouter;