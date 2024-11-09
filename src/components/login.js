import { useState } from "react"
import './style.css';
function Form(){
    const[input,setinput]=useState({
        user:"",
        email:"",
        password:""
    });
    const submitform=(event)=>{
        event.preventDefault();
        console.log('Inputs:',input);
    }
    const newValues=(e)=>{
        const{name,value}=e.target;
        setinput(previousState=>{
            return{
                ...previousState,
                [name]:value
            }
        })
    }
    return(
        <div className="container">
            <div className="sign-in">
                <h1>Welcome Back!</h1>
                <p><strong>To keep connected with us please login with your personal info.</strong></p>
                <button><strong>SIGN IN</strong></button>
            </div>
            <div className="sign-up">
                <form onSubmit={submitform}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="User" value={input.user} onChange={newValues} name="user"/>
                    <input type="email" placeholder="Email" value={input.email} onChange={newValues} name="email"/>
                    <input type="password" placeholder="Password" value={input.password} onChange={newValues} name="password"/>
                    <button type="submit"><strong>SIGN UP</strong></button>
                </form>
            </div>
        </div>
    )
}
export default Form;
