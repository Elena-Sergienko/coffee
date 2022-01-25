import './App.css';
import React, {useEffect, useState} from "react";
import initialMenu from './static/initial_menu.json'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/router/AppRouter";


function App() {
    const [menu, setMenu] = useState(initialMenu);
    // const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")));
    const [order, setOrder] = useState([]);
    // const [total, setTotal] = useState(JSON.parse(localStorage.getItem("total")));
    const [total, setTotal] = useState({subtotal: 0, tax: 0, total: 0});
    const [tips, setTips] = useState(+(localStorage.getItem("tips"))); // 0
    const [discount, setDiscount] = useState(0);
    const [auth, setAuth] = useState(false);
    const [userData, setUserData] = useState({user_id: "", firstName: "", lastName: "", phone: "", email: ""});


    useEffect(() => {
        localStorage.setItem('total', JSON.stringify(total))
    }, [total])

    useEffect(() => {
        localStorage.setItem('name', userData.firstName)
    }, [userData]);


    const getTotal = (newOrderPrice, newDiscount, newTips) => {
        let previous = JSON.parse(localStorage.getItem("total"))
        let newSubtotal = previous.subtotal;
        let newTax = 0;
        let newTotal = 0;

        if (newOrderPrice !== 0) {
            newSubtotal = previous ? previous.subtotal + newOrderPrice : total.subtotal + newOrderPrice;

            newTax = (newSubtotal - discount + tips) * 10 / 100;
            newTotal = newSubtotal - discount + tips + newTax;
            setTotal({...previous, subtotal: newSubtotal, tax: newTax, total: newTotal})
        }

        if (newDiscount !== 0) {
            console.log("")
            const beforeTax = previous.subtotal - newDiscount + tips;
            newTax = beforeTax * 10 / 100
            newTotal = beforeTax + newTax

            setTotal({...previous, tax: newTax, total: newTotal})
            // console.log('if(newDiscount-->', {...previous, tax: newTax, total: newTotal})
        }

        if (newTips !== 0) {
            const beforeTax = previous.subtotal - discount + newTips
            newTax = beforeTax * 10 / 100
            newTotal = beforeTax + newTax

            setTotal({...previous, tax: newTax, total: newTotal})
            console.log('if(newTips-->', {...previous, tax: newTax, total: newTotal})

        }
    }

    const addToOrder = (idItem) => {
        let newOrder = {};

        for (let i = 0; i < menu.length; i++) {
            for (let j = 0; j < menu[i].categories.length; j++) {
                for (let k = 0; k < menu[i].categories[j].items.length; k++) {
                    if (menu[i].categories[j].items[k].id === idItem) {
                        newOrder = menu[i].categories[j].items[k];
                    }
                }
            }
        }
        setOrder([...order, newOrder]);
        localStorage.setItem("order", JSON.stringify([...order, newOrder]));

        getTotal(newOrder.price, 0, 0)
        // console.log("new order-->", [...order, newOrder])
    }

    const getTips = (percent) => {
        const noTips = total.subtotal - discount;
        let newTips = noTips * percent / 100

        setTips(newTips);
        localStorage.setItem("tips", newTips.toString());
        getTotal(0, 0, newTips)
        // console.log("getTips-->", newTips)
    }

    const getDiscount = (percent) => {
        let newDiscount = total.subtotal * percent / 100

        setDiscount(newDiscount);
        localStorage.setItem("discount", newDiscount.toString());
        getTotal(0, newDiscount, 0)
    }

    const reset = () => {
        setOrder([])
        setDiscount(0)
        setTips(0)
        setTotal({subtotal: 0, tax: 0, total: 0})

        localStorage.removeItem('order')
        localStorage.removeItem('discount')
        localStorage.removeItem('tips')
        localStorage.removeItem('total')
    }

    const login = () => {
        let status = true
        setAuth(status)
        console.log(status)
    }

    const getUserData = (id, first, last, phone, email) => {
        setUserData({user_id: id, firstName: first, lastName: last, phone: phone, email: email})
    }


    return (
        <div className="App">
            <Navbar auth={auth}/>
            <AppRouter menu={menu} addToOrder={addToOrder} discount={discount} getDiscount={getDiscount} order={order}
                       subtotal={total.subtotal} total={total.total}
                       tax={total.tax} reset={reset} getTips={getTips} tips={tips} auth={auth} login={login}
                       firstName={userData.firstName} getUserData={getUserData}/>
        </div>
    );
}

export default App;
