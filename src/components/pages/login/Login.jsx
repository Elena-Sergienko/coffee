import React from 'react';
import LinkToSignup from "../../router/LinkToSignup";
import MyButton from "../../UI/button/MyButton";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

const Login = ({auth, login}) => {

    const linkText = 'Create an account'

    const onSubmit = (event) => {
        event.preventDefault();
        login();
    }


    return (
        <div>
            <h2 className="text">Login</h2>
            <LinkToSignup text={linkText}/>

            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder="User name"/>
                <br/>
                <input type="text" placeholder="Password"/>
                <br/>
                <MyButton>Login</MyButton>
            </form>

            {auth ?
                <div style={{color: 'green'}}>
                    Success!
                    <br/>
                    Get special discount on your order!
                    <br/>
                    Click Only for Members in menu
                </div>
                :
                null
            }

        </div>
    );
};

export default Login;