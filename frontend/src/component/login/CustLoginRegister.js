import React, { useEffect, useState } from "react";

import axios from "axios";
import "./LoginRegister.css";
import authHeader from "../services/auth-header"


import log from "../../images/log.svg"
import register from "../../images/register.svg"
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import { Link } from "react-router-dom";

const CustLoginRegister = () => {
  const history = useHistory();

  const reset = () => {
    setname("");
    setemail("");
    setcontactNumber("");
    setdob("");
    setadharNumber("");
    setpassword("");
    setCpassword("");
  }

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [dob, setdob] = useState("");
  const [adharNumber, setadharNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const role = "CUSTOMER";
  const [error, seterror] = useState("");
  const [errortype, seterrortype] = useState("");



  const login = (e) => {
    e.preventDefault();
    const customer = { email, password };
    axios.post(url + "/login", customer, { authHeader }).then((Response) => {
      if (Response.data.jwt)
        localStorage.setItem('jwttoken', JSON.stringify(Response.data.jwt));
      if (Response.data.role == '[ROLE_CUSTOMER]') {
        localStorage.setItem('role', "CUSTOMER");
        history.push("/customer/welcome");
      }
      else {
        setemail("");
        setpassword("");
        seterror("INVALID CREDENTIALS or AUTHORITY");
        seterrortype("alert-box");
        console.log('Something went wrong', error);
      }

    }
    ).catch(error => {
      setemail("");
      setpassword("");
      seterror("INVALID CREDENTIALS");
      seterrortype("alert-box");
      console.log('Something went wrong', error);
    });
  }

  const registerCustomer = (e) => {
    e.preventDefault();
    if (password === cPassword) {
      const customer = {
        name,
        email,
        contactNumber,
        dob,
        adharNumber,
        password,
        role
      }
      axios.post(url + "/registration", customer).then(Response => {
        Swal.fire(
          ' You are Registered Successfully',
          '',
          'success'
        )
        history.push("/customer");
        const container = document.querySelector(".container-l");
        container.classList.remove("sign-up-mode");
      }).catch(error => {
        reset();
        
        Swal.fire({
          icon: 'error',
          title: 'Please Check Details',
          text: '',
          footer: ''
      })
      });
    }
    else {
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
              <input type="text" className="input-fields-l" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
              <input type="password" className="input-fields-l" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
              <input type="submit" value="Login" className="btn-l solid" onClick={login} />
              <Link className="btn text-white" to={"/forgotpassword"}>Forgot Password ?</Link>
              <div className={errortype} role="alert">{error}</div>
            </form>
            <form className="sign-up-form l-form">
              <h2 className="title fw-bold">Sign Up</h2>
              <input type="text" className="input-fields-r" placeholder="Enter Full Name" value={name} onChange={(e) => { setname(e.target.value) }} />
              <input type="email" className="input-fields-r" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
              <input type="text" className="input-fields-r" placeholder="Enter Contact Number" value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} />
              <input type="date" className="input-fields-r" placeholder="Enter Date of Birth" value={dob} onChange={(e) => { setdob(e.target.value) }} />
              <input type="text" className="input-fields-r" placeholder="Enter Aadhar Number" value={adharNumber} onChange={(e) => { setadharNumber(e.target.value) }} />
              <input type="password" className="input-fields-r" placeholder="Enter New Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
              <input type="password" className="input-fields-r" placeholder="Confirm Password" value={cPassword} onChange={(e) => { setCpassword(e.target.value) }} />
              <input type="submit" className="btn-l" value="Sign up" onClick={registerCustomer} />
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
