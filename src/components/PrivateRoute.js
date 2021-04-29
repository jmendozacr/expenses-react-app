import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ children, ...props }) => {
    const { user } = useAuth();

    if(user) {
        return <Route {...props}> {children} </Route>
    } else {
        return <Redirect to="login"/>
    }
}

export default PrivateRoute;