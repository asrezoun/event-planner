import React from 'react';

const UserOrderTable = ({data}) => {
    return (
        <tr>
        <td>{data.userName}</td>
        <td>{data.email}</td>
        <td>{data.eventTitle}</td>
        <td>{data.status}</td>
    </tr>
    );
};

export default UserOrderTable;