import React from 'react';

const ManageOrderTable = ({data}) => {

    const handleDelete = (id,event) => {
        console.log(id);
        console.log("event",event.target.parentNode.parentNode);
        fetch(`https://lit-shelf-70776.herokuapp.com/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then(response =>response.json())
        .then(result=>{
            console.log("deleted successfully",result);
            event.target.parentNode.parentNode.style.display = 'none';
        });
    }

    return (
        <tr>
                <td>{data.userName}</td>
                <td>{data.email}</td>
                <td>{data.eventTitle}</td>
                <td>{data.status}</td>
                <td><button className="btn btn-dark" onClick={(event) =>{handleDelete(data._id,event)}}>Delete</button></td>
            </tr>
    );
};

export default ManageOrderTable;