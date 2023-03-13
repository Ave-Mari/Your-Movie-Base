import React, { useState, useEffect } from 'react';
//router
import { Route, Routes } from 'react-router-dom';
//components
import Dashboard from './components/Dashboard/Dashboard.jsx';
import MyList from './components/MyList/MyList.jsx';
import Popular from './components/Popular/Popular.jsx';


function App() {
    return (
        <div className='wrapper'>
            <h1>Your movie Database</h1>
                <Routes>           
                    <Route path="/" element={ <Dashboard /> }>                  
                        <Route index element={<>some content</>} /> 
                        <Route path="popular" element={<Popular />} /> 
                        <Route path="my-list" element={<MyList />} /> 
                    </Route>
                        
                </Routes>
           
        </div>
    )
}


export default App;