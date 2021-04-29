import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage';
import Admin from './Components/Dashboard/Admin/Admin';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import AllOrders from './Components/Dashboard/AllOrders/AllOrders';

import Review from './Components/UserDashboard/Review/Review';
import UserOrders from './Components/UserDashboard/UserOrders/UserOrders';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import UserOrderList from './Components/UserDashboard/UserOrderList/UserOrderList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>

        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>

      
        <PrivateRoute path="/addEvent">
            <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/allOrders">
          <AllOrders></AllOrders>
        </PrivateRoute>
        <PrivateRoute path="/manageEvents">
          <ManageOrders></ManageOrders>
        </PrivateRoute>

        <PrivateRoute path="/userDashboard/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/userDashboard/orderService">
          <UserOrders></UserOrders>
        </PrivateRoute>
        <PrivateRoute path="/userDashboard/userOrderList">
          <UserOrderList></UserOrderList>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
              <HomePage/>
          </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
