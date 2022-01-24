import React, {useState} from 'react';
import MyButton from "../../UI/button/MyButton";
import LinkToLogin from "../../router/LinkToLogin";

const SignUp = ({getUserData}) => {

    const [accountCreated, setAccountCreated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('+1');
    const countryOptions = [
        {
            id: 'country_01',
            name: 'USA',
            code: '+1'
        },
        {
            id: 'country_02',
            name: 'Vietnam',
            code: '+84'
        },
        {
            id: 'country_03',
            name: 'Poland',
            code: '+48'
        },
        {
            id: 'country_04',
            name: 'United Kingdom',
            code: '+44'
        }
    ]

    const getFirstName = (e) => {
        const newFirstName = e.target.value
        setFirstName(newFirstName)
        console.log(newFirstName)
    }

    const getLastName = (e) => {
        setLastName(e.target.value)
        console.log(e.target.value)
    }
    const getPhone = (e) => {
        setPhoneNumber(e.target.value)
        console.log(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const submit = (event) => {
        event.preventDefault()
        console.log('Send data to DB -->', {
            user_id: (Math.round(Math.random() * 100, 1)).toString(),
            firstName,
            lastName,
            phone,
            email
        });
        getUserData((Math.round(Math.random() * 100, 1)).toString(), firstName, lastName, phone, email);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setAccountCreated(true);
    }

    const getCountryCode = (name) => {
        console.log(name)
        let newCountry = countryOptions.find(el => el.name === name)
        setCountry(newCountry.code)
        console.log(newCountry.code)
    }

    return (
        <div>
            <h2 className="text">Create an account</h2>
            <form onSubmit={submit}>
                <br/>
                {/*<input value={firstName} onBlur={getFirstName} type="text" placeholder="First name" />*/}
                <input value={firstName} onChange={getFirstName} type="text" placeholder="First name"/>
                <input type="text" value={lastName} onChange={getLastName} placeholder="Last name"/>
                <br/>

                <span style={{marginRight: 5}}>
                    Country:
                </span>
                <select name="countries" id="country" onChange={event => getCountryCode(event.target.value)}>
                    {countryOptions.map(country =>
                        <option key={country.id} value={country.name}>{country.name}</option>,
                    )}
                </select>
                <br/>
                <span>{country}</span>


                <input type="text" value={phone} onChange={getPhone} placeholder="Phone number"/>
                <br/>
                <input type="text" value={email} onChange={getEmail} placeholder="E-mail"/>
                <br/>
                <MyButton>Submit</MyButton>
            </form>

            {accountCreated ?
                <div style={{color: 'green'}}>
                    Congratulations!!!
                    <br/>
                    Your are a member now!
                    <br/>
                    To get discount on your order, please, log in to your account:
                </div> : null
            }

            <LinkToLogin text={"Login"}/>
        </div>
    );
};

export default SignUp;