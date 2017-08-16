import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Shop from './components/Shop/Shop';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Shop } path='/shop' />

    </Switch>
)
