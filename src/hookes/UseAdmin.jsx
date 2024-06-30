
import UseAuth from './UseAuth';
import useAxiosSecqure from './useAxiosSecqure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
 const {user}=UseAuth();
 const axiosSecure=useAxiosSecqure();
 const {data: isAdmin,isPending: isAdminLoading}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async()=>{
    const res=await axiosSecure.get(`/users/admin/${user.email}`);
    console.log(res.data);
    return res.data?.admin;

    }
 })
 return [isAdmin,isAdminLoading]
};

export default UseAdmin;