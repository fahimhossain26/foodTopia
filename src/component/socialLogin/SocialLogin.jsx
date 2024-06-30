import { FaGoogle } from "react-icons/fa6";
import UseAuth from "../../hookes/UseAuth";
import UseAxiosPublic from "../../hookes/UseAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic=UseAxiosPublic();
    const navigate=useNavigate();
    const handelgoogleSignin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo={
                    email:result.user?.email,
                    name:result.user?.displayName
                } 

                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    console.log(res.data);
                    navigate('/')
                })

            })
    }
    return (
        <div>
            <div>
                <button onClick={handelgoogleSignin} className="btn w-full bg-blue-400">
                    <FaGoogle className="text-orange-800"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;