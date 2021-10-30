import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link, useHistory, useLocation } from "react-router-dom";
import BreadcrumbBanner from '../../Shared/BreadcrumbBanner/BreadcrumbBanner';


const Register = () => {

    const history = useHistory();

    const {signInWithGoogle, createUserEmailPassword, setError, error} = useAuth();

    const location = useLocation();
    const historys = useHistory();
    const redurectURI = location.state?.from || '/';

        const handleWithGoogleLogin = () => {
            signInWithGoogle()
            ?.then(result => {
                historys.push(redurectURI)
        });


    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [passWord2, setPassWord2] = useState('');

    const changeUserName = e =>{
        setName(e.target.value);
    }
    const changeUserEmail = e =>{
        setEmail(e.target.value);
    }
    const changeUserPassWord = e =>{
        setPassWord(e.target.value);
    }
    const changeUserPassWord2 = e =>{
        setPassWord2(e.target.value);
    }
    const handleRegistrationUser = e =>{

        e.preventDefault();
        if(passWord !== passWord2){
            setError('Confirm password not matched')
            return;
        }
        else if (passWord.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
          }
          else if (!/(?=.*[A-Z].*[A-Z])/.test(passWord)) {
            setError('Password Must contain 2 upper case');
            return;
          }
          else{
            createUserEmailPassword(email, passWord, name);
            setError("");

            history?.push("/");
          }

         
       
    }

    
    return (
        <div>
            <BreadcrumbBanner page="Register"></BreadcrumbBanner>
            <div className="login-form my-5 mx-auto"> 
            <div className="d-grid gap-2 mt-5 text-center">
                <Button size="lg" variant="light" onClick={handleWithGoogleLogin} className=" border border-dark">

                <div className="landing_form--googleButtonInner--3RQWE __web-inspector-hide-shortcut__"><span className=" landing_form--googleIcon--3Q7rS"><svg className="svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fillRule="evenodd" fillOpacity="1" fill="#4285f4" stroke="none"></path><path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fillRule="evenodd" fillOpacity="1" fill="#34a853" stroke="none"></path><path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fillRule="evenodd" fillOpacity="1" fill="#fbbc05" stroke="none"></path><path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fillRule="evenodd" fillOpacity="1" fill="#ea4335" stroke="none"></path></svg></span>Continue with Google</div>

                </Button>
                </div>

                <div className="or-separator text-center my-3 fw-bold">OR</div>

                <InputGroup className="mb-3">
                <FormControl 
                    type="text"
                    onBlur={changeUserName}
                    placeholder="Name"
                    aria-label="name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    type="email"
                    onBlur={changeUserEmail}
                    placeholder="Email"
                    aria-label="email"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl 
                    type="password"
                    onBlur={changeUserPassWord}
                    placeholder="Password"
                    aria-label="password"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    type="password"
                    onBlur={changeUserPassWord2}
                    placeholder="Confirm Password"
                    aria-label="confirm-password"
                    />
                </InputGroup>
                <div className="d-grid gap-2">
                <Button className="zara-btn"  onClick={handleRegistrationUser} variant="dark" size="lg">
                    Registration
                </Button>
                </div>
                <p className="text-center text-danger mt-3">{error}</p>
                <Link className="text-center mt-2 text-decoration-none d-block text-dark" to="/login">Already have an account</Link>
           </div>
        </div>
    );
};

export default Register;