import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddNewService from './Pages/AddNewService/AddNewService';
import Login from './Pages/Authentication/Login/Login';
import LoginRoute from './Pages/Authentication/LoginRoute/LoginRoute';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import Booking from './Pages/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ThankYou from './Pages/ThankYou/ThankYou';

function App() {

 

  
  return (
    <div className="App">
      <AuthProvider>
        <Router> 
        <Header></Header>
          <Switch> 
              <Route exact path="/"> 
                  <Home></Home>
              </Route>
              <Route path="/home"> 
                  <Home></Home>
              </Route>
              <PrivateRoute path="/my-orders"> 
                  <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path="/manage-all-orders"> 
                  <ManageAllOrders></ManageAllOrders>
              </PrivateRoute>
              <PrivateRoute path="/add-new-service"> 
                  <AddNewService></AddNewService>
              </PrivateRoute>
              <PrivateRoute path="/booking/:roomId"> 
                  <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path="/thanks"> 
                  <ThankYou></ThankYou>
              </PrivateRoute>
              <Route path="/contact"> 
                  <Contact></Contact>
              </Route>
              <LoginRoute path="/login"> 
                  <Login></Login>
              </LoginRoute>
              <LoginRoute path="/register"> 
                    <Register></Register>
              </LoginRoute>
              <Route path="*"> 
                  <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router> 
      </AuthProvider>
       
    </div>
  );
}

export default App;
