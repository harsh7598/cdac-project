import React, { useEffect,useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./LoginRegister.css";
import NavSignOut from "../AfterLoginPage/NavSignOut";
import CustomerWelcome from "../AfterLoginPage/CustomerWelcome";

import log from "../../images/log.svg"
import register from "../../images/register.svg"
import {Link,useHistory } from "react-router-dom";
import {url} from"../common/constants";

const CustLoginRegister = () => {
  const history = useHistory();
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [dob, setdob] = useState("");
  const [adhaarNumber, setadhaarNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const login =(e)=>{
    history.push("/customer/welcome");
    <Link to={"/customer/welcome"}></Link>
    const customer={
      email,
      password
    }
    axios.post(url+"/customer",customer).then(Response=>{
      console.log(Response.data);
      axios.get(url+"/customer/welcome").then(Response=>{
        if(Response.status===200){
        }
      })
      
    })
 
  }
  const registerCustomer =(e)=>{
    e.preventDefault();
    if(password==cPassword){
    const customer={
      name,
      email,
      contactNumber,
      dob,
      adhaarNumber,
      password
    }
      axios.post(url+"/custregistration",customer).then(Response=>{console.log(Response.data)})
    }
    else{
      console.log("invalid password not matched");
    }
  }

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-l");
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
  );
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Sign In</h2>
                <input type="text" className="input-fields-l" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <input type="password" className="input-fields-l" placeholder="Password" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
              <input type="submit" value="Login" className="btn-l solid" onClick={login}/>
            </form>
            <form className="sign-up-form l-form">
              <h2 className="title fw-bold">Sign Up</h2>
                <input type="text" className="input-fields-r" placeholder="Enter Full Name" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
                <input type="email" className="input-fields-r" placeholder="Enter Email" value={email}  onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Contact Number" value={contactNumber}  onChange={(e)=>{setcontactNumber(e.target.value)}}/>
                <input type="date" className="input-fields-r" placeholder="Enter Date of Birth" value={dob}  onChange={(e)=>{setdob(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Aadhar Number" value={adhaarNumber}  onChange={(e)=>{setadhaarNumber(e.target.value)}}/>
                <input type="password " className="input-fields-r" placeholder="Enter New Password" value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
                <input type="password" className="input-fields-r" placeholder="Confirm Password" value={cPassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
              <input type="submit" className="btn-l" value="Sign up" onClick={registerCustomer}/>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">New here ?</h2>
              <button className="btn btn-l transparent w-100" id="sign-up-btn"  >
                Sign up
            </button>
            </div>
            <img src={log} className="image-l" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">One of us ?</h2>
              <button className="btn btn-l transparent w-100" id="sign-in-btn" >
                Sign In
            </button>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustLoginRegister;
