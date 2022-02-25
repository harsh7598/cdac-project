import { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { url } from '../common/constants';
import { Button } from 'react-scroll';
import { MdNoPhotography } from 'react-icons/md';
// import employeeService from '../services/employee.service';

const SelectMedia = () => {


  const [studio, setstudio] = useState([]);
  const [Photography, setphotography] = useState(false);
  const [videography, setvideography] = useState(false);
  const [album, setalbum] = useState(false);
  const [drone, setdrone] = useState(false);
  const [crane, setcrane] = useState(false);

  const selectmedia = () => {
    const media={
      Photography,
      videography,
      album,
      drone,
      crane
    }
    var eventdata = localStorage.getItem("eventdata");
    var menu=localStorage.getItem("menu");
    axios.post(url + "/media", { eventdata,media,menu})
      .then(Response => {
        console.log('Printing event data', Response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (

    <div className="forms-container">
      <div className=' align-items-center'>
        <div className="  py-5 text-white my-5">
          <div colSpan="2" className="fw-bold pt-5 display-6">
            Photo and Film
            <div className="py-6 list-items">
              <div>
                <input type="checkbox" name="photography" id="photography" onChange={() => setphotography(!Photography)} /><label htmlFor="photography">Photography</label>
                <div className="result">
                  Above checkbox is {Photography ? "checked" : "un-checked"}.
                </div>

                <input type="checkbox" name="videography" id="videography" onChange={() => setvideography(!videography)} /><label htmlFor="videography">Videography</label>
                <input type="checkbox" name="album" id="album" onChange={() => setalbum(!album)} /><label htmlFor="album">Album</label>
                <input type="checkbox" name="drone" id="drone" onChange={() => setdrone(!drone)} /><label htmlFor="drone">Drone</label>
                <input type="checkbox" name="crane" id="crane" onChange={() => setcrane(!crane)} /><label htmlFor="crane">Crane</label>
                <Button on onClick={selectmedia}></Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col-6 scroll'>
            {studio.map((studiodata) => (

              <div key={studiodata.id}>
                 <Link className="nav-link text-white py-1" to={caterer.link}> 
                <div className="event__box py-2 px-2 border border-2 border-white">
                  <h4 className="text-start px-3">Name: {studiodata.name}</h4>
                  <h4 className="text-start px-3">Contact: {studiodata.contact}</h4>
                  <h4 className="text-start px-3">Cost: {studiodata.cost}</h4>
                </div>
                 </Link>
                <br></br>
              </div>
            ))}
          </div> */}

      </div>
    </div>




    // <div className="container">
    //   <h3>List of Employees</h3>
    //   <hr/>
    //   <div>
    //     <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
    //     <table className="table table-bordered table-striped">
    //       <thead className="thead-dark">
    //         <tr>
    //           <th>Name</th>
    //           <th>Location</th>
    //           <th>Department</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //       {
    //         venues.map(employee => (
    //           <tr key={employee.id}>
    //             <td>{employee.name}</td>
    //             <td>{employee.location}</td>
    //             <td>{employee.department}</td>
    //             <td>
    //               <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>

    //               {/* <button className="btn btn-danger ml-2" onClick={() => {
    //                 handleDelete(employee.id);
    //               }}>Delete</button> */}
    //             </td>
    //           </tr>
    //         ))
    //       }
    //       </tbody>
    //     </table>

    //   </div>
    // </div>
  );
}

export default SelectMedia;
