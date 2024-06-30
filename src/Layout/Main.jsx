import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Navber from "../shared/navber/Navber";


const Main = () => {
    const location=useLocation();
    const noHeaderFooter= location.pathname.includes('login') ||
    location.pathname.includes('signUp')
   
    return (
        <div>
           { noHeaderFooter|| <Navber></Navber>}
            <Outlet></Outlet>
             { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;