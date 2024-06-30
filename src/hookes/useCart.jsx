import { useQuery } from "@tanstack/react-query";
import useAxiosSecqure from "./useAxiosSecqure";
import UseAuth from "./UseAuth";



const useCart = () => {
  //tanstack quary
  const axiosSecure=useAxiosSecqure()
  const {user}=UseAuth();
  const {refetch, data:cart=[]}=useQuery({
queryKey:['cart',user?.email],
queryFn: async() =>{
    const res=await axiosSecure.get(`/carts?email=${user.email}`)
    return res.data
}
  })
       return [cart,refetch]
};

export default useCart;