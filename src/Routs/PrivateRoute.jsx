import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Form } from "react-hook-form";
import UseAuth from "../hookes/UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth()
    const location=useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;

    }
    return <Navigate to='/login' state={{From: location}} replace></Navigate>
};

export default PrivateRoute;