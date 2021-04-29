
import { Table } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import React, { useEffect, useState } from 'react';
import ManageOrderTable from './ManageOrderTable';

const ManageOrders = () => {
    const [allOrderData, setAllOrderData] = useState([]);

    useEffect(()=>{
        fetch('https://lit-shelf-70776.herokuapp.com/getAllOrders')
        .then(res=>res.json())
        .then(data => setAllOrderData(data));
    },[])
    console.log(allOrderData);
    return (
        <div className="row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-5 text-center">
            <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Event Title</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrderData.map(data=><ManageOrderTable key={data._id} data={data}></ManageOrderTable>)}
                        </tbody>
                    </Table>
            </div>
        </div>
    );
};

export default ManageOrders;