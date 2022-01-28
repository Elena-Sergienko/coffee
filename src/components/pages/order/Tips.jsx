import React, {useState} from 'react';
import MyButton from "../../UI/button/MyButton";
import YouCanGetDiscount from "../onlyForMembers/YouCanGetDiscount";
import MyModal from "../../UI/modal/MyModal";

const Order = ({getTips, tips, discount}) => {

    // const [modalActive, setModalActive] = useState(false)
    const [visible, setVisible] = useState(false)
    const [customTips, setCustomTips] = useState(0)

    const getCustomTips = (e) => {
        console.log("Custom-->", e.target.value)
        setCustomTips(e.target.value)
    }

    const submitTips = () => {
        getTips(customTips)
        setVisible(false)
    }


    return (
        <div>
            Tips
            <MyButton style={{backgroundColor: 'yellowgreen'}} onClick={() => getTips(10)}>10%</MyButton>
            <MyButton style={{background: 'yellowgreen'}} onClick={() => getTips(15)}>15%</MyButton>
            <MyButton style={{background: 'yellowgreen'}} onClick={() => getTips(20)}>20%</MyButton>
            <MyButton style={{background: 'yellowgreen'}} onClick={() => setVisible(true)}>Other</MyButton>

            {visible ?
                <MyModal modalActive={visible}>
                    <input type="number" onBlur={getCustomTips}/> %
                    <MyButton onClick={submitTips}>Submit</MyButton>
                </MyModal>
                :
                null
            }

            {tips
                ?
                <div style={{color: 'blue'}}>Tips added. Thank you!
                    <YouCanGetDiscount discount={discount}/>
                </div>
                :
                null
            }
        </div>
    );
};

export default Order;