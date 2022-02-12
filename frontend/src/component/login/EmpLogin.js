import React, { useState } from "react"
import { url } from '../common/constants'
import axios from "axios";
import "./EmpLogin.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const LoginRegister = (props) => {
  

 const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
 // const [otp, setotp] = useState('')

  
  const addCustomerToDB = (e) => {
    if (email.length === 0) {
      alert('enter email')
    } else if (password.length === 0) {
        alert('enter password')
    }
     else {
      const data = new FormData()
      data.append('email', email)
      data.append('password', password)
    
      // axios.post(url + '/employee', data).then((response) => {
      //   const result = response.data
      //   console.log(result)
      // });
    axios.get(url+'/employee');

    // e.preventDefault();
    // const loginCredential = {email,password};
    // employeeService.getAll().then(Response =>{
    //   console.log("employee");
    // })

    // employeeService.create(loginCredential)
    //         .then(response => {
    //             console.log("employee added successfully", response.data);
    //             history.push("/");
    //         })
    //         .catch(error => {
    //             console.log('something went wroing', error);
    //         })
     }
  }
  
  return (
    <div className="bckgrnd">
        <div className="position-absolute top-50 start-50 translate-middle h-100 w-100">
          {/* <div className={`container ${addclass}`} id="container"> */}

          <form className="Emplogin-form-in ">
            <h1 className="fw-bold mb-4">Employee Login</h1>
            <input type="email" className="my-3" placeholder="EMAIL" value={email} onChange={(e) => {
            setemail(e.target.value)
          }} />
            <input type="password" className="my-3" placeholder="PASSWORD" value={password} onChange={(e) => {
            setpassword(e.target.value)
          }}/>
            <div className="d-grid col-10  mx-auto">
            <button className="btn bg-danger btn-lg text-white my-3 px-5 py-2 rounded-pill" onClick={addCustomerToDB}>LOGIN</button>
            </div>
          </form>


        </div>
    </div>
  );
};

export default LoginRegister;
