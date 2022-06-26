import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import './home.css'


export default function Home() {


    const [item, setItem] = useState();
    const [loginSuccess, setLoginSuccess] = useState(false)
    const time = new Date().toLocaleTimeString()


    //handle for logout
    const handleLogOut = () => {
        const user =
            JSON.parse(localStorage.getItem('login'));


        axios.post("https://api.m3o.com/v1/user/Logout", {
            "sessionId": user.session.id
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer OWFjMjAyNzctNTZjOC00ZDM3LWFmMzktZDgwYTdjNTE0N2Zm'
            }
        }).then(response => {
            console.log(response);
            localStorage.removeItem('login')
            setLoginSuccess(true)

        }).catch(err => {
            console.log(err.response.data);


        })
    }


    return <>
        {loginSuccess && <Navigate to={'/login'} />}

        {/* logout div */}
        <div className="logout">
            <button onClick={handleLogOut}>LogOut</button>
        </div>


        <div className="mydiv">
            {localStorage.getItem('login') === null ?
                <button onClick={() => setItem(true)}>Click for time </button>
                :
                <h1>{time}</h1>}

            {item && <Navigate to={'/login'} />}
        </div>


    </>
}