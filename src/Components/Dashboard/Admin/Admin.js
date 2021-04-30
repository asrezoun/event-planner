import React, { useContext, useEffect, useLayoutEffect } from 'react';
import SideBar from '../SideBar/SideBar';

import './Admin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Admin = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    ///check admin
    const [isAdmin, setIsAdmin] = useState(false);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://lit-shelf-70776.herokuapp.com/adminList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                if(data.length>0){
                    setIsAdmin(true);
                }
            });
    }, [])
    console.log("admin data: ", isAdmin);

    const onSubmit = (data, event) => {
        console.log(data);
        const eventData = {
            eventName: data.serviceName,
            description: data.eventDescription,
            price: data.price,
            image: imageUrl
        }

        const url = `https://lit-shelf-70776.herokuapp.com/addEvents`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        }).then(res => {
            console.log("server response", res);
            alert("event added successfully!");
            event.target.reset();
        })
        console.log(eventData);

    }

    const handleUploadImage = (event) => {
        console.log("image:: ", event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '4162808f7121f692d2f8c33176126b9d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

        <div>

            {isAdmin && <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <div className="form p-5 m-5">
                        <h3 className="text-center text-info">Add a new Service</h3>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <label className="form-label" htmlFor="serviceName">Event Title: </label>
                            <input className="form-control" name="serviceName" placeholder="Enter your event Title here" ref={register({ required: true })} />
                            {errors.pickFrom && <span className="error">Event title is required</span>}

                            <label className="form-label" htmlFor="price">Price: </label>
                            <input className="form-control" name="price" placeholder="Enter price to arrange the event" ref={register({ required: true })} />
                            {errors.pickFrom && <span className="error">Price is required</span>}

                            <label className="form-label" htmlFor="eventDescription">Event Description: </label>
                            <textarea className="form-control" name="eventDescription" placeholder="Shortly describe about your event" ref={register({ required: true })} />
                            {errors.pickTo && <span className="error">Event Description is required</span>}

                            <input className="form-control my-2" type="file" onChange={handleUploadImage} name="" id="" />

                            <input className="form-control btn btn-primary" type="submit" />
                        </form>
                    </div>
                </div>
            </div>}

            {!isAdmin && <div className="text-center">
                <h2 className="text-center py-5 my-5 text-red">You are not an Admin!</h2>
                <h6>If you want to check admin panel</h6>
                <h6>Then login as</h6>
                <h6>email: test@gmail.com</h6>
                <h6>password: test123</h6>
                <Link to="/home"><button className="btn btn-red text-white">Back to Home</button></Link>
            </div>}
        </div>
    );
};

export default Admin;