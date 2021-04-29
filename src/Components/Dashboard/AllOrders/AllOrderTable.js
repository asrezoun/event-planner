import React from 'react';
import { useHistory } from 'react-router-dom';

const AllOrderTable = ({ data }) => {

    const history = useHistory();
    const handleChange = (event,id)=>{
        // console.log(event.target.value);
        // console.log(id);
        const orderUpdate = {status:event.target.value};
        console.log(orderUpdate);
        fetch(`https://lit-shelf-70776.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderUpdate)
        })
        .then(res => res.json())
        .then(data => {
            console.log("updated");
        })
        alert("updated successfully! changes will be shown on reload");
        //window.location.reload();
    }
    return (
        <tr>
            <td>{data.userName}</td>
            <td>{data.email}</td>
            <td>{data.eventTitle}</td>
            <td>{data.status}</td>
            <td>
                <select className="form-control bg-dark text-white" id="sel1" onChange={(event)=>handleChange(event,data._id)}>
                    <option>change..</option>
                    <option>pending</option>
                    <option>in progress</option>
                    <option>completed</option>
                    
                </select>
            </td>
        </tr>
    );
};

export default AllOrderTable;