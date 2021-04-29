import React from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const MakeAdmin = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data,event) => {
        console.log(data);
        const adminData = {
            email: data.email
        }

        const url = `https://lit-shelf-70776.herokuapp.com/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        }).then(res => {
            console.log("server response", res);
            alert("admin added successfully!");
            event.target.reset();
        })
        console.log(adminData);
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <div className="form p-5 m-5">
                    <h3 className="text-center text-info">Make a new admin</h3>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label" htmlFor="email">Email id: </label>
                        <input className="form-control" name="email" placeholder="Enter the email id of new admin" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">Event title is required</span>}

                        <input className="form-control btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;