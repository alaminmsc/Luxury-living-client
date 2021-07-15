import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (e)=>{
        console.log(e.target.files[0]);
        const imageFile = new FormData();
        imageFile.set('key','5be73f2068242a3b630e1f9cab67d160');
        imageFile.append('image',e.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload',imageFile)
        .then(function(res){
            console.log(res.data.data.display_url);
            setImageURL(res.data.data.display_url);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    const onSubmit = data => {
        const newService ={
            title:data.title,
            price:data.price,
            description:data.description,
            image:imageURL
        }
        console.log(data);
        fetch('http://localhost:5000/addServices', {
        method: 'POST',
        body: JSON.stringify(newService),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    };


    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 my-4 py-2">
            <div className="d-flex px-4 justify-content-between">
                <h5>Add Service</h5>
                <h5>User</h5>
            </div>
            <div className="bg-light py-5">
            <form onSubmit={handleSubmit(onSubmit)} style={{width:'50%',marginLeft:'30px',padding:'5px'}}>
                <div className="d-flex">
                    <div className="mr-1">
                    <label>Service Title</label>
                    <input {...register("title", { required: true })} className="form-control" style={{width:'290px'}} placeholder="Enter Title" />
                    {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="ms-1">
                    <label>Image</label>
                    <input type="file" {...register("image", { required: true })} onChange={handleImageUpload} className="form-control" />
                    {errors.image && <span>This field is required</span>}
                    </div>
                </div>
                <br></br>
                <label>Price</label>
                <input type="number" {...register("price", { required: true })} cols="5" rows="4" className="form-control" placeholder="price" />
                {errors.price && <span>This field is required</span>}
                <label>Description</label>
                <textarea {...register("description", { required: true })} cols="5" rows="4" className="form-control" placeholder="Write Description" />
                {errors.description && <span>This field is required</span>}

                <div className="text-end my-1">
                    <button type="submit" className="btn btn-block btn-primary px-3 ms-auto">Submit</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddService;