import React from 'react';
import { Link } from 'react-router-dom';

const UserSideBar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link style={{textDecoration: 'none'}} to="/userDashboard/review">Review</Link>
                <Link style={{textDecoration: 'none'}} to="/userDashboard/orderService">Order Service</Link>
                <Link style={{textDecoration: 'none'}} to="/userDashboard/userOrderList">Order List</Link>
               
                <Link style={{textDecoration: 'none'}} to="/Home">Home</Link>
               
            </div>

        </div>
    );
};

export default UserSideBar;