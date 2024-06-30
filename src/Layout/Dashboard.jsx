import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaStreetView, FaUserMinus, FaUtensils } from "react-icons/fa";
import { FaCartPlus, FaDAndD, FaFileContract, FaMarsAndVenus, FaPeopleGroup } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hookes/useCart";
import UseAdmin from '../hookes/UseAdmin'




const Dashboard = () => {
    const [cart] = useCart()
    //toDo : get admin value from the database

    const [isAdmin] = UseAdmin() ;
    return (
        <div className="flex">
            {/*  dashboard sideber  */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>

                            <li><Link to={'/dashboard/cart'}>
                                <button className="btn">
                                    <FaCartPlus />
                                    <div className="badge badge-warning">{cart.length}</div>
                                </button>
                            </Link>
                            </li>


                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome> Admin  Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils> AddItems</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manageItem'>
                                    <FaList></FaList> Manage Items </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaBook></FaBook> Manage Bookings </NavLink>
                            </li>




                            <li>
                                <NavLink to='/dashboard/users'>
                                    <FaPeopleGroup></FaPeopleGroup> All Users  </NavLink>
                            </li>
                        </>
                            :
                            <>
                             <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>

                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome> Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/order/salad'>
                            <FaList></FaList>   Menu </NavLink>
                    </li>

                    <li>
                        <NavLink to='/order/contact'>
                            <FaFileContract></FaFileContract> contact</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard Content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;