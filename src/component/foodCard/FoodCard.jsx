import React, { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider';
import UseAuth from '../../hookes/UseAuth';
import Swal from 'sweetalert2';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecqure from '../../hookes/useAxiosSecqure';
import useCart from '../../hookes/useCart';
// import axios from 'axios';


const FoodCard = ({item}) => {
    const {image,price,name,recipe,_id}=item;
    const {user}=UseAuth();
    const navigate = useNavigate()
    const location=useLocation();
    const axiosSecure=useAxiosSecqure()
    const [,refetch]= useCart()


    const handelAddToCard=()=>{
      // console.log(food,user.email);
      if(user && user.email){
        //send cart item to the database 
        // console.log(user.email,food);
        const cartItem={
          menuId:_id,
          email:user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch the cart to update the cart items count 
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: "You're not login",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            //send the user to the login page  
            navigate('/login',{state:{from:location}})
          }
        });
      }
    }
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='bg-slate-900 text-white absolute right-0 mr-4 p-3'>${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
   
    <div className="card-actions justify-end">
      <button
      onClick={handelAddToCard} 
      className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-5">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;