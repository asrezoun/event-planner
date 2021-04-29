import React from 'react';
import { Link } from 'react-router-dom';
import wedding from '../../../image/wedding.jpg';
import NavMenu from '../NavMenu/NavMenu';
import './Header.css';
const Header = () => {
    return (
        <main className="row d-flex align-items-center header-container mb-5" >
            <div className="col-md-5 offset-md-1 ">
                    <img src={wedding} className="img-fluid header-image" alt=""/>
            </div>
            <div className="col-md-5">
                <h1>We are available For Your <br/> <span style={{color: '#ED4A43', fontWeight:'bold'}}>Event Planning</span> </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus tempora a ratione ullam iusto aliquam doloremque! Incidunt, reprehenderit rerum!</p>
                <button className="btn btn-lg btn-red"><Link to="/userDashboard/orderService"><span className="text-white">Hire Us!</span></Link></button>
            </div>
        </main>
    );
};

export default Header;