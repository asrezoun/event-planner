import React, { useEffect, useState } from 'react';
import ReviewCards from '../ReviewCards/ReviewCards';

const ReviewSection = () => {

    const [reviewData, setReviewData] = useState([]);

    useEffect(()=>{
        fetch('https://lit-shelf-70776.herokuapp.com/getReviews')
        .then(res=> res.json())
        .then(data=>setReviewData(data));
    },[])

    console.log("reviewData: ",reviewData);
    return (
        <div className="container py-2">
            <h2 className="text-center font-weight-bold pb-5"><span className="text-red">Review</span> from our Proud Customers</h2>
            <div className="row">
                {
                    reviewData.map(review=><ReviewCards key={review._id} data={review}></ReviewCards>)
                }
                
            </div>
        </div>
    );
};

export default ReviewSection;