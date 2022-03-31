
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// import "./EmpLogin.css"

// const ChangePassword = () => {

//     const [password, setPassword] = useState("")
//     const [cpassword, setcPassword] = useState("")
//     const history=useHistory();
//     const HandleSubmit=()=>{
//         if(password==cpassword){
//             axios.put(url + "/changepassword",).then(Response => {
//                 console.log(Response.data);
//                 history.push("/");
//               })
           
//         }
//     } 
//     return (
//         <div className=" position-absolute top-50 start-50 translate-middle loginback">
//             <div className="position-absolute top-50 start-50 translate-middle loginform">
//                 <form className="p-5 text-black">
//                     <h1>
//                         Change Password
//                     </h1>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" className="form-control "  id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//                         <input type="password" className="form-control" id="cpassword" value={cpassword} onChange={(e)=>{setcPassword(e.target.value)}}/>
//                     </div>
//                     <div className="mb-3">
//                         <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>

//     )
// }
// export default ChangePassword;