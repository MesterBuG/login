import React from "react";
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";


export default function App() {
    
    return <>
    
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
}