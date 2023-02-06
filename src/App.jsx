import React, { useState } from 'react';
//router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken.jsx';
//components
import Dashboard from './components/Dashboard.jsx'
import Preferences from './components/Preferences.jsx'
import Login from './components/Login.jsx'


export default function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className='wrapper'>
            <h1>App</h1>
            <BrowserRouter>
            <Routes>                   
             <Route path="/dashboard" element={ <Dashboard />} />            
             <Route path="/preferences" element={ <Preferences />} />
            </Routes>
            </BrowserRouter>
           
        </div>
    )
}
