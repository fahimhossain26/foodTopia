import React from 'react';
import SerctionTitle from '../../../component/SerctionTitle';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../../hookes/UseAxiosPublic';
import useAxiosSecqure from '../../../hookes/useAxiosSecqure';
import { useForm } from 'react-hook-form';

const UpdateItem = () => {

    const {name,category,recipe,price,_id} = useLoaderData();

    // console.log(item);

    const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_Api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


    const { register,handleSubmit,reset,formState: { errors },} = useForm();
    const axiosPublic=UseAxiosPublic()
    const axiosSecure=useAxiosSecqure()
    const onSubmit = async (data) => {
        console.log(data)
    //image upload to imgbb and then get an url 
    const imageFile= {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_Api,imageFile,{
        headers:{
            'content-Type': 'multipart/form-data'
        }
    });
    if(res.data.success){
        const menuItem={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
             image:res.data.data.display_url
        }
        const menuRes=await axiosSecure.patch(`/menu/${_id}`,menuItem);
        console.log(menuRes.data);
        if(menuRes.data.modifiedCount > 0){
            //show success pop up
            // reset();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.name} is updated  success fully`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with image url',res.data);

    }
  
    
    return (
        <div>
           <SerctionTitle heading='update Item' subHeading='refresh info'></SerctionTitle>
        

           <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full  my-6">
                        <label className="label">
                            <span className="label-text">Recipy Name name*</span>
                        </label>
                        <input
                            {...register("name", {required:true})}
                            required
                            type="text"
                            defaultValue={name}
                            placeholder="Recipy Name"
                            className="input input-bordered w-full " />
                    </div>

                    <div className='flex gap-6'>
                        {/* category */}
                        <div className="form-control w-full  my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue={category} {...register("category" , {required:true})} className="select select-bordered w-full ">
                                <option disabled value='default'>Select a Category </option>
                                <option value="salad">Salad</option>
                                <option value="pizza">piza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">desserts</option>
                                <option value="drinks">drinks</option>

                            </select>
                        </div>

                        {/* Price */}

                        <div className="form-control w-full  my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", {required:true})}
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>

                      

                    </div>

                      {/* recipy details  */}

                      <label className="form-control">
                            <div className="label">
                                <span className="label-text">Details Recipy </span>
                               
                            </div>
                            <textarea
                             {...register("recipe")}
                             defaultValue={recipe}
                             className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                            
                        </label>

                  {/* upload file  */}
                     <div className='form-control w-full  my-6'>
                     {/* <label className="label">
                                <span className="label-text">upload image </span>
                            </label> */}
                     <input 
                      {...register("image", {required:true})}
                     type="file" className="file-input file-input-bordered w-full max-w-xs" />
                     </div>


                   <button className='btn '>
                    Update menu item 
                   </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;