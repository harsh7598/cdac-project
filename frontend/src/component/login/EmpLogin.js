import React, { useState } from "react"
// import useHistory from "react";
import "./EmpLogin.css";
import { Link } from "react-router-dom";
import employeeService from "../../services/employee.service"
import { useHistory } from "react-router-dom";
const LoginRegister = (props) => {
  

 const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
 // const [otp, setotp] = useState('')

  
  const addCustomerToDB = () => {
    localStorage.setItem('email', email);
     if (email.length === 0) {
      alert('enter email')
    } else if (password.length === 0) {
        alert('enter password')
    }
     else {
      const data = new FormData()
      data.append('email', email)
      data.append('password', password)
      console.log(email,password)
      employeeService.create(data)
      .then(response => {
          console.log("employee added successfully", response.data);
          history.push("/");
      })
      // axios.post(url + '/employee', data).then((response) => {
      //   const result = response.data
      //   console.log(result)
        
      //   if (result.status === 'success' && result.data!=null) {
      //     alert('successfully Login...')
      //     if(result.data.role==='User'){
      //       localStorage.setItem('email',email);
      //       props.isUser(true)
      //       history.push('/about');
      //     }
      //     else{
      //   //    props.isUser(true)
      //       history.push('/services');
      //     }
      //   }
      //    else {
      //     console.log(result.error)
      //     alert('Enter correct Email and Password')
      //   }
      // })
     
    }
  }
  
  return (
    <div className="bckgrnd">
        <div className="position-absolute top-50 start-50 translate-middle h-100 w-100">
          {/* <div className={`container ${addclass}`} id="container"> */}

          <form className="Emplogin-form-in ">
            <h1 className="fw-bold mb-4">Employee Login</h1>
            <input type="email" className="my-3" placeholder="EMAIL" onChange={(e) => {
            setemail(e.target.value)
          }} />
            <input type="password" className="my-3" placeholder="PASSWORD" onChange={(e) => {
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
