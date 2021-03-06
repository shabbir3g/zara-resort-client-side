import React from 'react';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';
import error from '../../images/error.jpg'

const NotFound = () => {
    return (
        <div className="my-5">
            <BreadcrumbBanner page="404 Error"></BreadcrumbBanner>
            <div className="text-center"> 
            <img className="img-fluid" src={error} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;