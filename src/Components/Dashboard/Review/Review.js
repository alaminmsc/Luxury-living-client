import React from 'react';
import { useForm } from "react-hook-form";
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);


    return (
        <div className="row">
            <div className="col-md-3">
                <CustomerSidebar></CustomerSidebar>
            </div>
            <div className="col-md-9 my-4 py-2">
            <div className="d-flex px-4 justify-content-between">
                <h5>Book</h5>
                <h5>User</h5>
            </div>
            <div className="bg-light py-5">
            <form onSubmit={handleSubmit(onSubmit)} style={{width:'40%',marginLeft:'30px',padding:'5px'}}>
                <input {...register("username", { required: true })} className="form-control" placeholder="Your name" />
                {errors.username && <span>This field is required</span>}
                <br></br>
                <input {...register("email", { required: true })} className="form-control" placeholder="Company name, designation" />
                {errors.email && <span>This field is required</span>}
                <br></br>
                <textarea {...register("servicename", { required: true })} className="form-control" placeholder="Description" />
                {errors.servicename && <span>This field is required</span>}
                <br></br>
            
                <button type="submit" className="btn btn-block btn-primary px-3">Submit</button>                
                </form>
            </div>
            </div>
        </div>
    );
};

export default Review;