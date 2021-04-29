import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
const SideBar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link style={{textDecoration: 'none'}} to="/allOrders">Order List</Link>
                <Link style={{textDecoration: 'none'}} to="/addEvent">Add Event</Link>
                <Link style={{textDecoration: 'none'}} to="/makeAdmin">Make Admin</Link>
                <Link style={{textDecoration: 'none'}} to="/manageEvents">Manage Events</Link>
                <Link style={{textDecoration: 'none'}} to="/Home">Home</Link>
               
            </div>

        </div>
    );
};

export default SideBar;