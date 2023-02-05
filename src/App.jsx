import React, { useState } from 'react';
//router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import Dashboard from './components/Dashboard.jsx'
import Preferences from './components/Preferences.jsx'
import Login from './components/Login.jsx'


export default function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className='wrapper'>
            <h1>App</h1>
            <Routes> 
                <Route path="/dashboard" element={ <Dashboard />} />
                <Route path="/preferences" element={ <Preferences />} />
            </Routes>
        </div>
    )
}
