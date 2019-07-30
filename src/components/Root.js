import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { history } from '../history'

import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Public from '../pages/Public'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const Root = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute exact path="/login" component={Login}/>
            <PrivateRoute exact path="/" component={Home}/>
            <Route exact path="/public" component={Public}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default Root
