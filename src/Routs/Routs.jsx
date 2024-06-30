import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/signUp/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import AddItems from "../Pages/Dashboard/addItems/AddItems";
import AdminRouts from "./AdminRouts";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem.jsx/UpdateItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
           path:'order/:category',
           element:  
            <Order></Order>
          
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<Signup></Signup>
        }

      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        //Normal user Routs 
        {
          path:'cart',
          element:<Cart></Cart>
        },
        //Admin Only routs  
        {
           path:'addItems',
           element:<AdminRouts><AddItems></AddItems></AdminRouts> 
        },
        {
          path:'updateItem/:id',
          element:<AdminRouts><UpdateItem></UpdateItem></AdminRouts>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)

        },
        {
          path:'manageItem',
          element:<ManageItem></ManageItem>
        },
        {
        path:'users',
        element:<AdminRouts><AllUsers></AllUsers></AdminRouts>
        }
      ]
    }
  ]);