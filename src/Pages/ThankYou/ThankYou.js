import React from 'react';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';
import thanks from '../../images/thanks.png'

const ThankYou = () => {
    return (
        <div className="my-5">
            <BreadcrumbBanner page="Thank You"></BreadcrumbBanner>
            <div className="text-center"> 
            <img className="img-fluid" src={thanks} alt="" />
            </div>
            
        </div>
    );
};

export default ThankYou;