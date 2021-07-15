import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import CustomerSidebar from './Components/Dashboard/CustomerSidebar/CustomerSidebar';
import Book from './Components/Dashboard/Book/Book';
import Review from './Components/Dashboard/Review/Review';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import CreateAccount from './Components/Login/CreateAccount';
import AdminSidebar from './Components/AdminDashboard/AdminSidebar/AdminSidebar';
import OrderList from './Components/AdminDashboard/OrderList/OrderList';
import AddService from './Components/AdminDashboard/AddService/AddService';
import MakeAdmin from './Components/AdminDashboard/MakeAdmin/MakeAdmin';

export const UserContext = createContext() ;

function App() {
  const [loggedInUser, setLoggedInUser] = useState({success:false});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/dashboard">
         <CustomerSidebar></CustomerSidebar>
        </Route>
        <Route path="/book/:name">
          <Book></Book>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/bookinglist">
          <BookingList></BookingList>
        </Route>
        <Route path="/createaccount">
          <CreateAccount></CreateAccount>
        </Route>
        <Route path="/admin">
          <AdminSidebar></AdminSidebar>
        </Route>
        <Route path="/orderlist">
          <OrderList></OrderList>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
