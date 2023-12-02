import React ,{useState}from "react";
import  auth  from "../../firebase";
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
const SignUp = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const signUp=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
           navigate.push("/");
        })
        .catch((error)=>{console.error("Sign Up error:",error);});
         };
    return(
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Sign Up Page</h1>
                <input type="email" 
                placeholder="Enter your email"
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Sign Up </button>
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </form>
        </div>
    )
}


export default SignUp;