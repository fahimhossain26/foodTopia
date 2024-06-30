import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { authContext } from '../../provider/AuthProvider';
import { FaCartPlus } from "react-icons/fa6";
import useCart from '../../hookes/useCart';

const Navber = () => {
  const {user,logOut}=useContext(authContext);
  const [cart]=useCart()
  const handelLogout=()=>{
  logOut()
  .then(()=>{ })
  .catch(error=>console.log(error))
  }
    const navOptions=<>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/menu'}>Our Menu</Link></li>
    <li><Link to={'/order/salad'}>Order Food</Link></li>
    <li><Link to={'/dashboard/cart'}>
    <button className="btn">
    <FaCartPlus />
  <div className="badge badge-secondary">{cart.length}</div>
</button>
      </Link>
      </li>
     {
      user? <>
      <button onClick={handelLogout} className="btn btn-neutral">logOut</button>
       </> : <>
      <li><Link to={'/login'}>Login</Link></li>
      </>
     }
      
    </>
    return (
        <div>

<div className="navbar  fixed max-w-screen-xl  text-white bg-black opacity-60 z-10 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-black rounded-box w-52">
        
{navOptions}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <img className='w-20 h-18' src="https://i.postimg.cc/dVmDKSgd/Colorful-Illustrative-Restaurant-Master-Chef-Logo-removebg-preview.png" alt="" />
  </div>
  <div className=" navbar-center hidden lg:flex   ">
    <ul className="menu  menu-horizontal px-1  ">
    
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  bg-white">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        </div>
  </div>
</div>
        </div>
    );
};

export default Navber;