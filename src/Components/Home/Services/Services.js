import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetch('https://lit-shelf-70776.herokuapp.com/eventData')
            .then(res => res.json())
            .then(data => setEventData(data))
    }, [])

    console.log("event data from services page: ", eventData);
    return (
        <div className="container py-5">
            <h2 className="pb-5 text-center font-weight-bold"><span className="text-red">Services</span> We Provide</h2>
            <div className="row">
                {
                    eventData.map(service => <ServiceCard key={service._id} data={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;