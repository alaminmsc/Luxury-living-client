import React from 'react';
import { useForm } from "react-hook-form";
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 my-4 py-2">
            <div className="d-flex px-4 justify-content-between">
                <h5>Make Admin</h5>
                <h5>User</h5>
            </div>
            <div className="bg-light py-5">
                <form onSubmit={handleSubmit(onSubmit)} style={{width:'50%',marginLeft:'30px',padding:'5px'}}>
                    <label>Email:</label>
                    <br></br>
                    <input {...register("email", { required: true })} placeholder="email@xyz.com" style={{width:'250px'}} className="mr-1" />
                    {errors.email && <span>This field is required</span>}
                    
                    <input type="submit" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddService;