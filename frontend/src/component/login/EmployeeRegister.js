import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import register from "../../images/register.svg"
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";
import Swal from "sweetalert2";

const EmployeeRegister = () => {
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
        adharNumber,
        accountNumber,
        password,
        role,
        salary
      }
      axios.post(url + "/registration", customer).then(Response => {
        console.log(Response.data);
        Swal.fire(
          ' You are Registered Successfully',
          '',
          'success'
        )
        history.push("/manager/viewemployees")
      }).catch(
        Swal.fire({
          icon: 'error',
          title: 'Please Check Details',
          text: '',
          footer: ''
      })
      )
    }
  }
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup-mod mt-5">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Register New Employee</h2>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <input type="text" className="input-fields-mod" placeholder="Enter Full Name" value={name} onChange={(e) => { setname(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="email" className="input-fields-mod" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="input-fields-mod" placeholder="Enter Contact Number" value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} />
                    </td>
                    <td>
                      <input type="date" className="input-fields-mod" placeholder="Enter Date of Birth" value={dob} onChange={(e) => { setdob(e.target.value) }} />
                    </td>
                  </tr>
                    <tr>
                      <td colSpan={2}>
                        <input type="text" className="input-fields-mod" placeholder="Enter Aadhar Number" value={adharNumber} onChange={(e) => { setadharNumber(e.target.value) }} />
                      </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="text" className="input-fields-mod" placeholder="Enter Account Number" value={accountNumber} onChange={(e) => { setaccountNumber(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="roles" id="roles" className="input-fields-mod" onChange={(e) => { setrole(e.target.value) }}>
                        <option value="" hidden>Choose Role</option>
                        <option value="EMPLOYEE">EMPLOYEE</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" className="input-fields-mod" placeholder="Enter Salary" value={salary} onChange={(e) => { setsalary(e.target.value) }} />
                    </td>
                    </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="password" className="input-fields-mod" placeholder="Enter New Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="password" className="input-fields-mod" placeholder="Confirm Password" value={cPassword} onChange={(e) => { setCpassword(e.target.value) }} />
                    </td>
                  </tr>
                </tbody>
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
