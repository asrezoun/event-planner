import React from 'react';

const ReviewCards = ({ data }) => {
    return (
        <div className="col-md-4">
            <div className="card text-white bg-dark" style={{width: "18rem",minHeight: "13rem"}}>
                <div className="card-body">
                    <p className="card-text text-justify">{data.userReview}</p>
                    
                </div>
                <footer className="blockquote-footer text-right text-white font-italic p-3"> {data.userName} ({data.userEmail})</footer>
            </div>

           </div> 
    );
};

export default ReviewCards;