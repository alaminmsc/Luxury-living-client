import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const Book = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();
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
                <h5>{loggedInUser.userName}</h5>
            </div>
            <div className="bg-light py-5">
            <form onSubmit={handleSubmit(onSubmit)} style={{width:'40%',marginLeft:'30px',padding:'5px'}}>
                <input {...register("username", { required: true })} className="form-control" />
                {errors.username && <span>This field is required</span>}
                <br></br>
                <input {...register("email", { required: true })} className="form-control" />
                {errors.email && <span>This field is required</span>}
                <br></br>
                <input {...register("servicename", { required: true })} className="form-control" value={name} />
                {errors.servicename && <span>This field is required</span>}
                <br></br>
                <p>Pay with</p>
                <div className="d-flex">
                    <div className="w-50">
                        <input type="checkbox" {...register("paypal", { required: false })} /> Paypal
                    </div>
                    <div className="mx-3">
                        <input type="checkbox" {...register("creditcard", { required: false })} /> Credit Card
                    </div>
                </div>
                <input {...register("cardnumber", { required: true })} className="form-control" placeholder="Card Number" />
                        {errors.cardnumber && <span>This field is required</span>}
                <br></br>
                <div className="d-flex">
                    <div className="w-50">
                    <input {...register("mmyy", { required: true })} className="form-control" placeholder="MM/YY" />
                        {errors.mmyy && <span>This field is required</span>}
                    </div>
                    <div className="w-50">
                    <input {...register("cvc", { required: true })} className="form-control mx-1" placeholder="CVC" />
                        {errors.cvc && <span>This field is required</span>}
                    </div>
                </div>
                <div className="d-flex justify-content-between align-item-center my-2">
                    <p>Your service charged will be $2.5</p>
                    <button type="submit" className="btn btn-block btn-primary px-3">PAY</button>
                </div>
                
                </form>
            </div>
            </div>
        </div>
    );
};

export default Book;