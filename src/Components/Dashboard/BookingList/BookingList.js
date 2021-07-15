import React from 'react';
import { useForm } from "react-hook-form";
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const BookingList = () => {
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
                <h2>Booking list will be here...</h2>
            </div>
            </div>
        </div>
    );
};

export default BookingList;