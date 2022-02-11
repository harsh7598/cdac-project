import React, { useEffect } from "react";
import "./LoginRegister.css";
import log from "../../images/log.svg"
import register from "../../images/register.svg"
import { Link } from "react-router-dom";
const LoginRegistercopy = () => {

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
                <input type="text" className="input-fields-l" placeholder="Email" />
                <input type="password" className="input-fields-l" placeholder="Password" />
              <input type="submit" value="Login" className="btn-l solid" />


            </form>
            <form action="#" className="sign-up-form l-form">
              <h2 className="title fw-bold">Sign Up</h2>
                <input type="text" className="input-fields-r" placeholder="Enter Full Name"/>
                <input type="email" className="input-fields-r" placeholder="Enter Email" />
                <input type="text" className="input-fields-r" placeholder="Enter Contact Number" />
                <input type="date" className="input-fields-r" placeholder="Enter Date of Birth" />
                <input type="text" className="input-fields-r" placeholder="Enter Aadhar Number" />
                <input type="password " className="input-fields-r" placeholder="Enter New Password" />
                <input type="password" className="input-fields-r" placeholder="Confirm Password" />
              <input type="submit" className="btn-l" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">New here ?</h2>
              <Link className="btn btn-l transparent w-100" id="sign-up-btn"  >
                Sign up
            </Link>
            </div>
            <img src={log} className="image-l" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">One of us ?</h2>
              <Link className="btn btn-l transparent w-100" id="sign-in-btn">
                Sign In
            </Link>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginRegistercopy;
