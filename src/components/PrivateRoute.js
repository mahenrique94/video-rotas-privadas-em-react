import React from 'react'
import { Route, Redirect } from 'react-router'
import { isLogged } from '../utils/auth'

const PrivateRoute = props => isLogged()
    ? <Route { ...props }/>
    : <Redirect to="/login"/>

export default PrivateRoute
