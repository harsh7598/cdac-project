import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { url } from '../common/constants';
// import employeeService from '../services/employee.service';

const SelectCaterer = () => {

  const [caterers, setCaterers] = useState([]);

  const init = () => {
    axios.get(url+"/caters")
      .then(Response => {
        console.log('Printing Caterers data', Response.data);
        setCaterers(Response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


  return (

<div className="forms-container">
      <div className="py-5 text-white my-5">
      <div colSpan="2" className="fw-bold pt-5 display-6">
                Select a Caterer
              </div>
        <div className="py-4 list-items">
          {caterers.map((caterer) => (

            <div key={caterer.id}>
              {/* <Link className="nav-link text-white py-1" to={caterer.link}> */}
                <div className="event__box py-2 px-2 border border-2 border-white">
                  <h4 className="text-start px-3">Name: {caterer.name}</h4>
                  <h4 className="text-start px-3">Contact: {caterer.contactNumber}</h4>
                  <h4 className="text-start px-3">Speciality: {caterer.speciality}</h4>         
                </div>
              {/* </Link> */}
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

export default SelectCaterer;
