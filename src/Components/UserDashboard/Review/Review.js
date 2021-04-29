import React from 'react';
import UserSideBar from '../UserSideBar/UserSideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data,event) => {
        console.log(data);
        const userReviewData= {
            userName: data.userName,
            userEmail: data.userEmail,
            userReview: data.userReview
            
        }

        const url = `https://lit-shelf-70776.herokuapp.com/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReviewData)
        }).then(res => {
            console.log("server response", res);
            alert("Review added successfully!");
            event.target.reset();
        })
        console.log("data",userReviewData);

    }
    return (
        <div className="row">
            <div className="col-md-4">
                <UserSideBar></UserSideBar>
            </div>
            <div className="col-md-8">
            <div className="form p-5 m-5">
                <h3 className="text-center text-info">Give us your Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label" htmlFor="userName">Your Name: </label>
                        <input className="form-control" name="userName" placeholder="Enter your name" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">Your name is required</span>}

                        <label className="form-label" htmlFor="userEmail">Your Email id: </label>
                        <input className="form-control" name="userEmail" placeholder="Enter your email id" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">Email is required</span>}


                        <label className="form-label" htmlFor="userReview">Your Review: </label>
                        <textarea className="form-control" name="userReview" placeholder="Write your review about us" ref={register({ required: true })} />
                        {errors.pickTo && <span className="error">Review is required</span>}

            
                        <input className="form-control btn btn-primary my-3" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;