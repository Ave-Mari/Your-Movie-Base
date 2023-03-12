import React, { useState, useEffect } from 'react';
//router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Popular from './components/Popular/Popular.jsx';


function App() {
    return (
        <div className='wrapper'>
            <h1>Your movie Database</h1>
            <BrowserRouter>
                <Routes>           
                <Route path="/" element={ 
                <Dashboard> 
                    <Route path="popular" element={<Popular />} />
                </Dashboard>} />                 
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}


export default App;