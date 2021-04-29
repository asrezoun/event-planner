import React from 'react';
import UserSideBar from '../UserSideBar/UserSideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';

const UserOrders = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
        console.log(data);
        const eventData = {
            userName: data.userName,
            email: data.email,
            eventTitle: data.eventTitle,
            status: "pending",
            price: "300"
        }

        const url = `https://lit-shelf-70776.herokuapp.com/addOrder`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        }).then(res => {
            console.log("server response", res);
            alert("order added successfully!");
            //event.target.reset();
        })
        console.log(eventData);

    }

    return (
        <div className="row">
            <div className="col-md-4">
                <UserSideBar></UserSideBar>
            </div>
            <div className="col-md-8">
                <div className="form p-5 m-5">
                    <h3 className="text-center text-info">Order Service</h3>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label" htmlFor="userName">Name: </label>
                        <input className="form-control" name="userName" placeholder="Enter your name" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">name is required</span>}

                        <label className="form-label" htmlFor="email">Email: </label>
                        <input className="form-control" name="email" placeholder="Enter your email" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">email is required</span>}

                        <label className="form-label" htmlFor="eventTitle">Event Title: </label>
                        <input className="form-control" name="eventTitle" placeholder="Enter Event Title" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">Event title is required</span>}

                        <label className="form-label my-2" htmlFor="eventDescription">Pay: </label>
                        <Payment></Payment>
                        <hr/>
                        <input className="form-control btn btn-primary my-2" type="submit" />
                    </form>
                </div>
            </div>


        </div>

    );
};

export default UserOrders;