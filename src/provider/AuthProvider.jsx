import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import UseAxiosPublic from "../hookes/UseAxiosPublic";


const auth = getAuth(app);
 export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider= new GoogleAuthProvider();
    const axiosPublic=UseAxiosPublic();


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn= (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
       setLoading(true)
       return signOut(auth);
    }

    const updaetUserProfile=(name,photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

// -----------------
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                //get token and store 
                const userInfo={email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            console.log('current user',currentUser);
            setLoading(false)
        })
        return()=>{
            return unsubscribe();
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updaetUserProfile,
       
    
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;