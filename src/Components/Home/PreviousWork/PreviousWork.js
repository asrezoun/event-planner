import React from 'react';
import wedding from '../../../image/wedding.jpg';
import science from '../../../image/event.jpg';
import dinner from '../../../image/restaurent.jpg';
import PreviousWorkCard from '../PreviousWorkCard/PreviousWorkCard';
import './PreviousWork.css';
const PreviousWork = () => {
    const previousData = [
        {
            name: 'Wedding Event',
            img: wedding,
            key: 1
        },
        {
            name: 'Science Fair',
            img: science,
            key: 2
        },
        {
            name: 'Dinner Party',
            img: dinner,
            key: 3
        }
    ]
    return (
        <div className='bg-previous'>
            <div className="container py-5 px-auto mb-5" >
                <div >
                    <h2 className="text-center pb-3 font-weight-bold">Some of Our <span style={{ color: "#ED4A43" }}>Previous Works</span></h2>
                </div>
                <div className="row">
                    {
                        previousData.map((data) => <PreviousWorkCard key={data.key} data={data}></PreviousWorkCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PreviousWork;