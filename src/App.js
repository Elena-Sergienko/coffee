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
    const [total, setTotal] = useState({})
    // const [tips, setTips] = useState(+(localStorage.getItem("tips"))); // 0
    const [tips, setTips] = useState(0); // 0
    const [discount, setDiscount] = useState(0);
    const [countInBag, setCountInBag] = useState(0);
    const [auth, setAuth] = useState(false);
    const [userData, setUserData] = useState({user_id: "", firstName: localStorage.getItem('name'), lastName: "", phone: "", email: ""});


    useEffect(() => {
        localStorage.setItem('total', JSON.stringify(total))
    }, [total])

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order))

        let newSubtotal = 0;
        let countAllItems = 0;

        order.forEach(el => {
            newSubtotal += el.price * el.count
            countAllItems += el.count
        })

        let subtWithDiscountBeforeTax = newSubtotal - discount;
        let withTips = subtWithDiscountBeforeTax + tips;
        let newTax = withTips * 10 / 100;
        let newTotal = withTips + newTax;

        setTotal({
            subtotal: newSubtotal,
            WithDiscount: subtWithDiscountBeforeTax,
            withTips: withTips,
            tax: newTax,
            total: newTotal
        })

        setCountInBag(countAllItems)

    }, [order, tips, discount])


    useEffect(() => {
        localStorage.setItem('name', userData.firstName)
    }, [userData]);


    const addToOrder = (idItem) => {
        let previousOrder = [...order]
        let newCandidateToOrder = {};

        for (let i = 0; i < menu.length; i++) {
            for (let j = 0; j < menu[i].categories.length; j++) {
                for (let k = 0; k < menu[i].categories[j].items.length; k++) {
                    if (menu[i].categories[j].items[k].id === idItem) {
                        newCandidateToOrder = menu[i].categories[j].items[k];
                    }
                }
            }
        }

        let newOrder = [];
        let isExistsInOrder = previousOrder.some(el => el.id === idItem);
        if (isExistsInOrder) {
            newOrder = previousOrder.map(el => el.id === newCandidateToOrder.id ? {...el, count: el.count + 1} : el);
        } else {
            newOrder = [...previousOrder, newCandidateToOrder];
        }
        setOrder(newOrder);
        localStorage.setItem("order", JSON.stringify(newOrder));
    }

    const subtractFromOrder = (idItem) => {
        let changedOrder = order.map(el => idItem === el.id ? {...el, count: el.count - 1} : el)
        let newOrder = changedOrder.filter(el => el.count > 0)
        setOrder(newOrder);
    }

    const deleteOrderRow = (idItem) => {
        let newOrder = order.filter(el => el.id !== idItem)
        setOrder(newOrder);
    }

    const getTips = (percent) => {
        const noTips = total.subtotal - discount;
        let newTips = noTips * percent / 100

        setTips(newTips);
        localStorage.setItem("tips", newTips.toString());
    }

    const getDiscount = (percent) => {
        let newDiscount = total.subtotal * percent / 100

        setDiscount(newDiscount);
        localStorage.setItem("discount", newDiscount.toString());
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
    localStorage.setItem('name', first)
    }


    return (
        <div className="App">
            <Navbar auth={auth}/>
            <AppRouter menu={menu} addToOrder={addToOrder} subtractFromOrder={subtractFromOrder} discount={discount}
                       getDiscount={getDiscount} order={order}
                       subtotal={total.subtotal} total={total.total}
                       tax={total.tax} reset={reset} getTips={getTips} tips={tips} auth={auth} login={login}
                       firstName={userData.firstName} getUserData={getUserData} countInBag={countInBag}
                       deleteOrderRow={deleteOrderRow}/>
        </div>
    );
}

export default App;
