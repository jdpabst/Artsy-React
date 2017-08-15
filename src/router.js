import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Shop from './components/Shop/Shop.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ shop } path='/shop' />

    </Switch>
)
