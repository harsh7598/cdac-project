import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./LoginRegister.css";
import NavSignOut from "../AfterLoginPage/NavSignOut";
import CustomerWelcome from "../AfterLoginPage/CustomerWelcome";

import log from "../../images/log.svg"
import register from "../../images/register.svg"
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";

const EmployeeRegister = () => {
  const history = useHistory();

  const reset = () => {
    setname("");
    setemail("");
    setcontactNumber("");
    setdob("");
    setadhaarNumber("");
    setpassword("");
    setCpassword("");
  }

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [dob, setdob] = useState("");
  const [adhaarNumber, setadhaarNumber] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [role, setrole] = useState("");
  const [salary, setsalary] = useState("");

  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [error, seterror] = useState("");
  
  const registerCustomer = (e) => {
    e.preventDefault();
    if (password == cPassword) {
      const customer = {
        name,
        email,
        contactNumber,
        dob,
        adhaarNumber,
        password
      }
      axios.post(url + "/custregistration", customer).then(Response => { console.log(Response.data) })
    }
    else {
      console.log("invalid password not matched");
    }
  }

  useEffect(() => {
    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    //const container = document.querySelector(".container-l");
    // sign_up_btn.addEventListener("click", () => {
    // container.classList.add("sign-up-mode");
    // });

    // sign_in_btn.addEventListener("click", () => {
    //container.classList.remove("sign-up-mode");
    // });
  }
  );
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup-mod mt-5">
            {/* <form action="#" className="sign-in-form l-form">
            <h2 className="title fw-bold">Register New Employee</h2>
                <input type="text" className="input-fields-r" placeholder="Enter Full Name" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
                <input type="email" className="input-fields-r" placeholder="Enter Email" value={email}  onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Contact Number" value={contactNumber}  onChange={(e)=>{setcontactNumber(e.target.value)}}/>
                <input type="date" className="input-fields-r" placeholder="Enter Date of Birth" value={dob}  onChange={(e)=>{setdob(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Aadhar Number" value={adhaarNumber}  onChange={(e)=>{setadhaarNumber(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Account Number" value={accountNumber}  onChange={(e)=>{setaccountNumber(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Role" value={role}  onChange={(e)=>{setrole(e.target.value)}}/>
                <input type="text" className="input-fields-r" placeholder="Enter Salary" value={salary}  onChange={(e)=>{setsalary(e.target.value)}}/>

                <input type="password " className="input-fields-r" placeholder="Enter New Password" value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
                <input type="password" className="input-fields-r" placeholder="Confirm Password" value={cPassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
              <input type="submit" className="btn-l" value="Sign up" onClick={registerCustomer}/>
            </form> */}

            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Register New Employee</h2>
              <table>
                <tr>
                  <td colSpan={2}>
                    <input type="text" className="input-fields-mod" placeholder="Enter Full Name" value={name} onChange={(e) => { setname(e.target.value) }} />
                  </td></tr>
                <tr><td colSpan={2}>
                  <input type="email" className="input-fields-mod" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                </td></tr>
                <tr>
                  <td><input type="text" className="input-fields-mod" placeholder="Enter Contact Number" value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} />
                  </td>
                  <td><input type="date" className="input-fields-mod" placeholder="Enter Date of Birth" value={dob} onChange={(e) => { setdob(e.target.value) }} /></td>
                </tr>

                <tr><td colSpan={2}>
                  <input type="text" className="input-fields-mod" placeholder="Enter Aadhar Number" value={adhaarNumber} onChange={(e) => { setadhaarNumber(e.target.value) }} />
                </td></tr>
                <tr><td colSpan={2}>
                  <input type="text" className="input-fields-mod" placeholder="Enter Account Number" value={accountNumber} onChange={(e) => { setaccountNumber(e.target.value) }} />
                </td></tr>
                <tr><td>
                  <select name="roles" id="roles" className="input-fields-mod" onChange={(e) => { setrole(e.target.value) }}>
                    <option value="" disabled selected hidden>Choose Role</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                  {/* <input type="text" className="input-fields-mod" placeholder="Enter Role" value={role} onChange={(e) => { setrole(e.target.value) }} /> */}
                </td>
                  <td>
                    <input type="text" className="input-fields-mod" placeholder="Enter Salary" value={salary} onChange={(e) => { setsalary(e.target.value) }} />
                  </td> </tr>
                <tr><td colSpan={2}>
                  <input type="password " className="input-fields-mod" placeholder="Enter New Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                </td></tr>
                <tr><td colSpan={2}>
                  <input type="password" className="input-fields-mod" placeholder="Confirm Password" value={cPassword} onChange={(e) => { setCpassword(e.target.value) }} />
                </td></tr>
              </table>
              <input type="submit" className="btn-l" value="Register" onClick={registerCustomer} />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h1 className="pt-5 pb-3">Onboarding Employee</h1>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default EmployeeRegister;
