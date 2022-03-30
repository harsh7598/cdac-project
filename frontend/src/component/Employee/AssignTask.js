import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constants";
import { useParams } from "react-router-dom";

const AssignTask = () => {
  const [tasks, setTasks] = useState([]);
  const [todo, settodo] = useState("");
  const token = JSON.parse(localStorage.getItem("jwttoken"));
  const { id } = useParams();

  const HandleDelete = (id) => {
    axios.delete(`${url}/deletetask/${id}`).then(Response => {
      console.log('Printing Menu data', Response.data);
      init();
    })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }
  useEffect(() => {
    init();
  },[]);
  const init = () => {
    axios.get(url + "/assigntasks/" + id).then(Response => {
      console.log('Printing Task Data', Response.data);
      setTasks(Response.data);
    })
    .catch(error => {
      console.log('Something went wrong', error);
    })     
  }

  const HandleAssign = () => {
    const task1={todo}
    console.log(todo);
    axios.post(url+"/assign/"+id,task1, { headers: { "authorization": `Bearer ${token}` } }).then(Response => {
      console.log('Printing Task Data', Response.data);
      init();
    })
    .catch(error => {
      console.log('Something went wrong', error);
    })
    
  }

  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-4 text-white my-5">
        <div className="row">
          <div className="py-5 mb-3">
            <label htmlFor="Textarea" className="form-label">ASSIGN TASK</label>
            <textarea className="form-control"  id="Textarea" rows="3" value={todo} onChange={(e) => { settodo(e.target.value) }}></textarea>
            <button type="button" className="btn btn-l"  onClick={HandleAssign}  >ASSIGN</button>
          </div>
        </div>
        <div className="row">
          {tasks.map((task) => (
            <div className="py-5 px-4 h-100" key={task.id}>
              <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                <div><p className="py-5 fs-2">{task.todo}</p></div>
                <div><p className="py-5 fs-2">{task.status}</p></div>
                <button className="btn btn-l" onClick={()=>HandleDelete(task.id)}>Terminate task</button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
