import React,{useEffect ,useState} from "react";
import {auth} from '../../firebase'
import { onAuthStateChanged,signOut } from "firebase/auth";

const AuthDetails =()=>{
    const [authUser,authSetUser]=useState(null);

    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                authSetUser(user);
            }else{
                authSetUser(null);
            }
        });

        return()=>{
            listen();
        }


    },[]);
    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('bye bye');
        })
    }
    return(
        <div>{authUser?<><p>Signed IN</p> <button onClick={userSignOut}>Sign Out</button></>:<p>Signed Out</p>}</div>
        
    )
}

export default AuthDetails;