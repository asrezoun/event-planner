import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import party from '../../../image/party.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';
//import { UserContext } from '../../App';

const NavMenu = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogOut = ()=>{
    const newUser = {name: '',
                      email:'',
                    password:''}
      setLoggedInUser(newUser);
  }
    return (
        <Navbar className="navbar bg-dark" expand="lg">
        <Navbar.Brand><Link style={{ textDecoration: 'none', fontSize:"35px" }} to="/home"><img className="img-fluid navIcon" src={party} alt=""/><strong className="text-danger">Event Planner</strong></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link className="nav"><Link style={{ textDecoration: 'none', color: 'white'}} to="/home">Home</Link></Nav.Link>
            <Nav.Link className="nav"><Link style={{ textDecoration: 'none', color: 'white' }} to="/admin">Admin</Link></Nav.Link>
            <Nav.Link className="nav"><Link style={{ textDecoration: 'none', color: 'white' }} to="/userDashboard/review">Dashboard</Link></Nav.Link>
        
            {loggedInUser.email?<Nav.Link style={{color: 'red'}}>{loggedInUser.name}</Nav.Link>
            :<Nav.Link style={{backgroundColor: "orange", borderRadius: "5px"}}><Link style={{ textDecoration: 'none' }} to="/login">Log in</Link></Nav.Link>}
           {loggedInUser.email && <Nav.Link onClick={handleLogOut} style={{backgroundColor: "orange", borderRadius: "5px"}}><Link style={{ textDecoration: 'none' }} to="/home">Log out</Link></Nav.Link>}
        
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavMenu;