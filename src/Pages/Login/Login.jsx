import { useContext, useEffect,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../component/socialLogin/SocialLogin";


const Login = () => {

  const [disabled,setDisable]=useState(true);
  const {signIn}=useContext(authContext);
  const Navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
  console.log('state in the location loin page ',location.state);

   useEffect(()=>{
    loadCaptchaEnginge(6); 
   },[])
    const handelLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);
        signIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
//  sweet alaert
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

Navigate(from,{replace:true});


        })
    }
   const handelValidedcapcha=(e)=>{
    const user_captcha_value =e.target.value;
    if(validateCaptcha(user_captcha_value)){
     setDisable(false)
    }
    else{
       setDisable(true)
    }
   }
  
    return (
       <>
        <Helmet>
                <title>FoodTopia || Login</title>
                
            </Helmet>

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <div className=" w-1/2 mr-5">
            
            <img src='https://i.postimg.cc/CxnYtGcD/giphy-2.gif' alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handelLogin} className="card-body">
            <h1 className="text-3xl font-bold text-center">Login </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             {/* TODO :reacpcha enable kortay hobe  */}
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handelValidedcapcha} name='Capcha'  type="text" placeholder="type the capcha" className="input input-bordered"  />
                {/* <button  className="btn btn-outline  btn-xs mt-3">Validate</button> */}
              
              </div>

              <div className="form-control mt-6">
                 {/* TODO :reacpcha enable kortay hobe ={disable} */}
                <input  disabled={false} className="btn btn-primary" type="submit" value="Login" />
              </div>
              <div className="divider">OR</div>
             
              <SocialLogin></SocialLogin>
            </form>
            <p className=' my-4 text-center text-orange-600 font-bold'>New to car doctor? <Link to={'/signUp'}>Sign Up</Link></p>
          </div>
        </div>
      </div>
       </>
    );
};

export default Login;