import axios from "axios";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import './Login.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    // handle for buttom
    const handleGetData = () => {

        axios.post("https://api.m3o.com/v1/user/Login", {
            "email": email,
            "password": password
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer OWFjMjAyNzctNTZjOC00ZDM3LWFmMzktZDgwYTdjNTE0N2Zm'
            }
        }).then(response => {
            console.log(response);
            setLogin(true);
            localStorage.setItem('login', JSON.stringify(response.data))

        }).catch(err => {
            console.log(err.response.data);

        })


    };

    return <>
        {/* navigate to home */}
        {login && <Navigate to={'/'} />}
        {/* create form  */}
        <div className="form">
            <h1>Login</h1>

            <label ><b>Email:</b></label>
            <br />
            <input type="text" placeholder="Email" value={email} onChange={
                (e) =>
                    setEmail(e.target.value)}
            />

            <br />
            <label ><b>Password:</b></label>
            <br />
            <input type="password" placeholder="Password" value={password} onChange={
                (e) =>
                    setPassword(e.target.value)}
            />

            <br />
            <br />
            <button type="submit" onClick={handleGetData}>Submit</button>
        </div>
    </>
}