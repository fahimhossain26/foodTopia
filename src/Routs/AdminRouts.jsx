import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../hookes/UseAdmin";
import UseAuth from "../hookes/UseAuth";
// import UseAuth from "../hookes/UseAuth";


const AdminRouts = ({children}) => {
    const { user, loading } = UseAuth();
    const [isAdmin,isAdminLoading]=UseAdmin();
    

    const location=useLocation()
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;

    }
    return <Navigate to='/' state={{From: location}} replace></Navigate>
};

export default AdminRouts;