import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Shop from './components/Shop/Shop';
import Item1 from './components/Item1/Item1';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Shop } path='/shop' />
        <Route component={ Item1 } path='/cactus' />

    </Switch>
)
