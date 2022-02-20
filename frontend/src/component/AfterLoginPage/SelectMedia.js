import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
// import employeeService from '../services/employee.service';

const SelectMedia = () => {

  //   const [caterers, setCaterers] = useState([]);

  //   const init = () => {
  //     axios.get()
  //       .then(response => {
  //         console.log('Printing Caterers data', response.data);
  //         setCaterers(response.data);
  //       })
  //       .catch(error => {
  //         console.log('Something went wrong', error);
  //       }) 
  //   }

  //   useEffect(() => {
  //     init();
  //   }, []);

  const caterers = [
    {
      id: 1
    },
    {
      id: 2

    },
    {
      id: 3

    }
  ];

  return (

    <div className="forms-container">
      <div className="py-5 text-white my-5">
        <div colSpan="2" className="fw-bold pt-5 display-6">
          Photo and Film
        </div>

        <div className="py-4 list-items">
          <div>
            
              <input type="checkbox" name="photography" id="photography" value="true" /><label for="photography">Photography</label>
              <input type="checkbox" name="videography" id="videography" value="true" /><label for="videography">Videography</label>
              <input type="checkbox" name="album" id="album" value="true" /><label for="album">Album</label>
              <input type="checkbox" name="drone" id="drone" value="true" /><label for="drone">Drone</label>
              <input type="checkbox" name="crane" id="crane" value="true" /><label for="crane">Crane</label>

          </div>
          {caterers.map((caterer) => (

            <div key={caterer.id}>
              <Link className="nav-link text-white py-1" to={caterer.link}>
                <div className="event__box py-2 px-2 border border-2 border-white">
                  <h4 className="text-start px-3">Name: {caterer.name}</h4>
                  <h4 className="text-start px-3">Contact: {caterer.contact}</h4>
                  <h4 className="text-start px-3">Cost: {caterer.cost}</h4>



                </div>
              </Link>
              <br></br>
            </div>

          ))}
        </div>
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
