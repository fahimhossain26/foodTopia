import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import SerctionTitle from "../../../component/SerctionTitle";
import useMenu from "../../../hookes/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecqure from "../../../hookes/useAxiosSecqure";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu  , , refetch] = useMenu();
    const axiosSecure=useAxiosSecqure();
    const handelDeleteItem =(item)=>{
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        //   }).then( async(result) => {
        //     if (result.isConfirmed) {
        //         const res = await axiosSecure.delete(`/menu/${item._id}`);
        //        console.log('bug here',res.data);
           
        //         if(res.data.deletedCount > 0){
        //             //refetch
        //             refetch();
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: `${item.name} deleted sucess full`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //               });
              
        //         }


           
        //     }
        //   });
        


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                 console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });


    }
    return (
        <div>
            <SerctionTitle heading='Manage All Item' subHeading={'hurry up'}></SerctionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item name </th>
                                <th>Price </th>
                                <th>Update </th>
                                <th>Delete  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item,index)=>  <tr key={item._id}>
                                    <td>
                                         {index+1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </td>
                                    <td>
                                       {item.name}
                                        
                                        
                                    </td>
                                    <td>{item.price}$</td>


                                    
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`} className="btn  btn-sm bg-green-700">
                                            <FaEdit className="text-white"></FaEdit>
                                        </Link>
                                    </td>

                                    <td>
                                    <button onClick={() => handelDeleteItem(item)} className="btn btn-ghost btn-lg text-red-600">
                                        <FaTrash></FaTrash>
                                    </button>
                                    </td>
                                </tr> )
                            }
                          
                       
                        </tbody>
                    
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItem;