import React from 'react';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';

const NotFound = () => {
    return (
        <div>
            <BreadcrumbBanner page="Page Not Found"></BreadcrumbBanner>
            <h1>Ops! Error Page not found</h1>
        </div>
    );
};

export default NotFound;