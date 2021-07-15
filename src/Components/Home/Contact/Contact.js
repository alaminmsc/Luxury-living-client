import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => console.log(data);
  

    return (
        <div className="container text-center">
            <h2>Contact</h2>
            <h1>Let us handle your <br></br>project, professionally.</h1>
            <br></br>
            <form onSubmit={handleSubmit(onSubmit)} style={{margin:'auto', width:'80%'}} className="py-4 bg-light">
                <div className="d-flex mx-5 my-2">
                    <input {...register("fullname", { required: true })} className="form-control mx-2" placeholder="Full Name" />
                    {errors.fullname && <span>This field is required</span>}
                    <input {...register("lastname", { required: true })} className="form-control mx-2" placeholder="Last Name" />
                    {errors.lastname && <span>This field is required</span>}
                    <br></br>
                </div>
                <div className="d-flex mx-5">
                    <input {...register("email", { required: true })} className="form-control mx-2" placeholder="Email Address" />
                    {errors.email && <span>This field is required</span>}

                    <input {...register("phone", { required: true })} className="form-control mx-2" placeholder="Phone Number" />
                    {errors.phone && <span>This field is required</span>}
                    <br></br>   
                </div> 
                <div className="my-2" style={{marginLeft:'55px', marginRight:'55px'}}>               
                    <textarea {...register("phone", { required: true })} className="form-control" cols="8" rows="5" placeholder="Message" />
                        {errors.phone && <span>This field is required</span>}
                        <br></br>  
                </div>  
                <button className="btn btn-block btn-primary" >Send Message</button>
            </form>
        </div>
    );
};

export default Contact;