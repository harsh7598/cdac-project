import React, { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../common/constants";
import { Link } from "react-router-dom";
const EmployeeWelcome = () => {
const [status, setstatus] = useState("")
const [tasks, setTasks] = useState([]);
const init=()=>{
  const token=JSON.parse(localStorage.getItem("jwttoken"));
  axios.get(url+"/asigntasks",{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
    console.log('Printing task data', Response.data);
    setTasks(Response.data);
  })
  .catch(error => {
    console.log('Something went wrong', error);
  })
  }
  
  const Handledone=(t)=>{
    axios.put(url+"/updatetask",t).then(Response => {
      console.log('Printing Menu data', Response.data);
    })
    .catch(error => {
      console.log('Something went wrong', error);
    });
  }
  
  useEffect(() => {
    init();
    }, [])
  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-5 text-white my-5">
      <Link className='btn btn-warning' to={"/customer/viewevent"}>View Assign Events</Link>
        <div className="row py-5">
          {tasks.map((task) => (
            <div className="py-5 px-4 h-100" key={task.id}>
                <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                  <div><p className="py-5 fs-2">{task.todo}</p></div>
                  <select name="status" id="status" className="input-fields-mod" defaultValue={task.status} onChange={(e) => { task.status=e.target.value;Handledone(task) }}>
                    <option value="completed">Completed</option>
                    <option value="in progress">In Progress</option>
                    <option value="Not Yet Started">Not Yet Started</option>
                  </select>
                  {/* <div><p className="py-5 fs-2">{task.status}</p></div> */}
                </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeWelcome;
