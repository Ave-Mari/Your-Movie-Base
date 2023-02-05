import React from 'react';
//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import Dashboard from './components/Dashboard.jsx'
import Preferences from './components/Preferences.jsx'


export default function App() {
  return (
    <div className='wrapper'>
        <Switch> 
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/references">
                <Preferences />
            </Route>
        </Switch>
    </div>
  )
}
