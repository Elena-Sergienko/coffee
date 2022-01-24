import React, {useState} from 'react';
import MyButton from "../../UI/button/MyButton";
import LinkToOrder from "../../router/LinkOrder";

const OnlyForMembers = ({discount, getDiscount}) => {

    const [percent, setPercent] = useState(0)

    return (
        <div>

            {discount > 0 ?
                <div>You got discount - {percent}%
                    <br/>
                    subtracted ${discount} from you order!
                    <br/>
                <LinkToOrder text={"Complete order"}/>
                </div>
                :

                <div>Discount for member
                    <MyButton onClick={() => {getDiscount(3); setPercent(3)}}>
                        Get 3% off
                    </MyButton>
                    <br/>
                    or
                    <br/>
                    Discount for student
                    <MyButton onClick={() => {getDiscount(5); setPercent(5)}}>
                        Get 5% off
                    </MyButton>
                </div>

            }
        </div>
    );
};

export default OnlyForMembers;