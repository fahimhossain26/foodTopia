import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";


const UseAuth = () => {
 const auth=useContext(authContext)
 return auth
};

export default UseAuth;