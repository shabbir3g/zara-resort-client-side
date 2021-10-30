import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import BreadcrumbBanner from '../../Shared/BreadcrumbBanner/BreadcrumbBanner';



const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading } = useAuth();
    if(isLoading){
        return  <div>
                <BreadcrumbBanner page="Zara Resort"></BreadcrumbBanner>
                <div className="text-center"> 
                <Spinner animation="border" variant="danger" />
                </div>
            </div>
    }
    return (
        <Route 
        {...rest}
        render={({location}) => user.email ? children : <Redirect 
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;