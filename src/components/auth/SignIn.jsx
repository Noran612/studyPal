import React ,{useState}from "react";
import  auth  from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
const SignIn = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            navigate.push("/");
        })
        .catch((error)=>{
            console.error("Login Error:",error);
        });
         };
    return(
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In Page</h1>
                <input type="email" 
                placeholder="Enter your email"
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Log In </button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}


export default SignIn;