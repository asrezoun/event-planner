import React from 'react';
import './PreviousWorkCard.css';
const PreviousWorkCard = ({data}) => {
    return (
        <div className="col-md-4 p-3">
            <div className="card" style={{width: "18rem"}}>

                <div className="card-body">
                    <img className="card-img-top" src={data.img} alt="" />
                    <h5 className="card-title text-center pt-2">{data.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default PreviousWorkCard;