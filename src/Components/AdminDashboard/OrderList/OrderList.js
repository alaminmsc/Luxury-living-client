import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrderList = () => {

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 my-4 py-2">
            <div className="d-flex px-4 justify-content-between">
                <h5>Order List</h5>
                <h5>User</h5>
            </div>
            <div className="bg-light py-5">
                <h2>Booking list will be here...</h2>
            </div>
            </div>
        </div>
    );
};

export default OrderList;