import React from 'react';
import MyButton from "../button/MyButton";
import LinkToMenu from "../../router/LinkToMenu";
import classes from "./YourOrder.module.css";
import MyRoundButton from "../button/MyRoundButton";
import YouCanGetDiscount from "../../pages/onlyForMembers/YouCanGetDiscount";

const YourOrder = ({total, reset, countInBag, discount}) => {
    const isMenuPage = (window.location.href).includes('menu')

    return (
        <div className={classes.container}>
            <div>
                <span className={classes.bag}> 👜 {countInBag}
                </span>
            </div>
            <br/>

            <span className={classes.yourOrder}>
                Your Order: ${total}
                </span>
            <br/>

            {isMenuPage
                ?
                <MyRoundButton onClick={reset}>↻</MyRoundButton>
                :
                <MyButton style={{background: 'yellowgreen', position: 'fixed', marginTop: 45, marginLeft: 5}}>
                    <LinkToMenu/>
                </MyButton>
            }

            {countInBag >= 2 ?
                <div style={{position: 'fixed', color: "red", marginTop: 80, marginLeft: 5}}>
                    <YouCanGetDiscount discount={discount}/>
                </div>
                : null
            }
        </div>
    );
};

export default YourOrder;