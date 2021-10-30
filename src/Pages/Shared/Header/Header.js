
import React from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = (props) => {
    const {user, logOut} = useAuth();


    return (
        <div className="header-area">

        {user.email ?
        <div className="st-top-header">
            <Container>
          
                <div className="st-top-header-in ">
               
                <ul className="st-top-header-list">
              
                    <li>
                    <svg enableBackground="new 0 0 479.058 479.058" viewBox="0 0 479.058 479.058" xmlns="http://www.w3.org/2000/svg">
                        <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"></path>
                        </svg>
                    {user.email}</li>
                
                    
                </ul>
            
            <div> 
                <> 
                    <span className="st-top-header-btn st-smooth-move">{user.displayName}</span> 
                
                    {
                        user.photoURL == null ? "" 
                        
                        : <span className="st-top-header-btn st-smooth-move"><img src={user.photoURL} alt="" /></span>  
                    }
                    
                    
                    
                    
                    <span className="st-top-header-btn st-smooth-move"> <Button className="zara-btn" variant="warning" size="sm" onClick={logOut} >Log Out</Button></span>

                </>
            
            </div>
                </div>
                 
            </Container>
        </div>
           : '' }
        <Navbar className="header-navbar" collapseOnSelect expand="lg" >
        <Container className="header-container">
        <Navbar.Brand as={Link} to="/">
        <img
            src={logo}
            className="d-inline-block align-top header-logo"
            alt="Zara Clinic"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/my-orders">My Orders</Nav.Link>
            <Nav.Link as={Link} to="/manage-all-orders">Manage All Orders</Nav.Link>
            <Nav.Link as={Link} to="/add-new-service">Add A New Service</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            
            {!user.email ? 
            <> 
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
            : ""

            }
          
           
         
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>





        </div>
    );
};

export default Header;