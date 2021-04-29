import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import UserSideBar from '../UserSideBar/UserSideBar';
import UserOrderTable from './UserOrderTable';
const UserOrderList = () => {
    const [orderData, setOrderData] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://lit-shelf-70776.herokuapp.com/orderList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrderData(data));
    }, [])
    console.log(orderData);
    return (
        <div className="row">
            <div className="col-md-3">
                <UserSideBar></UserSideBar>
            </div>
            <div className="col-md-8 py-5">
                
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Event Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data.map( product => <ProductTable pd={product} key={product._id}></ProductTable>)} */}
                        {orderData.map(order => <UserOrderTable data={order} key={order._id}></UserOrderTable>)}

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default UserOrderList;