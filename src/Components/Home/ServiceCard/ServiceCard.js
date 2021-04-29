import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
const ServiceCard = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="card" style= {{width: "18rem", height:"28rem"}}>
                
                <div className="card-body">
                    <img className="card-img-top service-img" src={data.image} alt="" />
                    <h5 className="card-title text-center py-2">{data.eventName}</h5>
                    <p className="card-text text-justify">{data.description}</p>
                    
                </div>
                <div className="card-footer bg-transparent border-danger"><Link to='/userDashboard/orderService'><button className="btn btn-red btn-block text-white font-weight-bold">${data.price} Order Service</button></Link></div>
            </div>
        </div>
    );
};

export default ServiceCard;