import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { isEmpty } from '@firebase/util';

const BreadcrumbBanner = (props) => {

    const {user} = useAuth();
    

    return (
        <div>
            <div className={!isEmpty(user.displayName) ? "log-in bg-img-5" : "log-out bg-img-5"  } id="page-banner">
            <div className="overlay-secondery-opacity-65">
                <div className="container">
                    <div className="row py-80">
                        <div className="col-sm-6">
                            <h1 className="banner-title text-white">{props.page}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ul className="pages-link">
                                <li><a href="/">Home</a></li>
                                <li>/</li>
                                <li>{props.page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BreadcrumbBanner;