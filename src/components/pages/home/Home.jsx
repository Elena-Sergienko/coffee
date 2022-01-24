import React from 'react';
import logo from "../../../static/img/IMG-20220119-WA0047.jpg";
import YourOrder from "../../UI/yourOrder/YourOrder";
import {Link} from "react-router-dom";
import LinkToLogin from "../../router/LinkToLogin";

const Home = ({total, reset, countInBag}) => {

    const textForSLogin = 'Log in to get access to special offers and discounts';
    return (
        <div>
            <YourOrder total={total} reset={reset} countInBag={countInBag}/>
            <h1 className="text">Favorite Coffee</h1>

            <div className="text">
                Enjoy a cup of your favorite coffee paired with our delicious food.
                <br/>
                Order from
                your local café and pick up a cup of your favorite coffee today.
                <br/>
                Order & pick up today.
<br/>
                {/*<a href="">Log in to get access to special offers and discounts</a>*/}

                <LinkToLogin text={textForSLogin}/>

                <br/>
                <img style={{width: 200, height: 'auto'}} src={logo}/>
            </div>

        </div>
    );
};

export default Home;