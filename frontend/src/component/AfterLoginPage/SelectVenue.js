import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
// import employeeService from '../services/employee.service';

const SelectVenue = () => {
  // const [venues, setVenues] = useState([]);
  // const init = () => {
  //   axios.get(url + "/venue")
  //     .then(response => {
  //       console.log('Printing Venues data', response.data);
  //       setVenues(response.data);
  //     })
  //     .catch(error => {
  //       console.log('Something went wrong', error);
  //     })
  // }

  // useEffect(() => {
  //   init();
  // }, []);

  const venues = [
    {
      id: 1,
      name: <p className="commonIcons2" />,
      location: "Book Event",
      address: "bookevent",
      maxCapacity: "bookevent",
      category: "bookevent",
      contact: "bookevent",
      cost: "bookevent",
      description: "bookevent"
    },
    {
      id: 2,
      name: <p className="commonIcons2" />,
      location: "Book Event",
      address: "bookevent",
      maxCapacity: "bookevent",
      category: "bookevent",
      contact: "bookevent",
      cost: "bookevent",
      description: "bookevent"
    },
  ];

  // const { data } = this.props.location
  // console.log(data);

  return (

    <div className="forms-container">
      <div className="py-5 text-white my-5">
        <div className="fw-bold pt-5 display-6">
          Select a Venue
        </div>
        <div className="py-4 list-items">
          {venues.map((venue) => (

            <div key={venue.id}>


              {/* <div className="event__box py-2 px-2 border border-2 border-white">
                <table className="col-12">
                  <tbody>
                    <tr><td><h4 className="text-start px-3">Name: {venue.name}</h4></td><td></td></tr>
                    <tr><td><h4 className="text-start px-3">Location: {venue.location}</h4></td>
                    <td rowSpan="8"><button type="submit" className="btn-warning mx -5 w-50 h-100" >Add</button></td></tr>
                    <tr><td><h4 className="text-start px-3">Address: {venue.address}</h4></td><td></td></tr>
                    <tr><td><h4 className="text-start px-3">Capacity: {venue.maxCapacity}</h4></td><td></td></tr>
                    <tr><td><h4 className="text-start px-3">Category: {venue.category}</h4></td><td></td></tr>
                    <tr><td><h4 className="text-start px-3">Contact: {venue.contact}</h4></td><td></td></tr>
                    <tr><td><h4 className="text-start px-3">Cost: {venue.cost}</h4></td><td></td></tr>
                    <tr><td><h4 className="text-start px-3">Description: {venue.description}</h4></td><td></td></tr>

                  </tbody>
                </table>
              </div> */}


              <div className="event__box py-2 px-2 border border-2 border-white grid-containe">
                <div className="grid-child">
                  <h4 className="text-start px-3">Name: {venue.name}</h4>
                  <h4 className="text-start px-3">Location: {venue.location}</h4>
                  <h4 className="text-start px-3">Address: {venue.address}</h4>
                  <h4 className="text-start px-3">Capacity: {venue.maxCapacity}</h4>
                  <h4 className="text-start px-3">Category: {venue.category}</h4>
                  <h4 className="text-start px-3">Contact: {venue.contact}</h4>
                  <h4 className="text-start px-3">Cost: {venue.cost}</h4>
                  <h4 className="text-start px-3">Description: {venue.description}</h4>
                </div>
                <div className="grid-child">
                  <button type="submit" className="btn-warning mx -5 w-50 h-100" >Add</button>
                </div>
              </div>


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

export default SelectVenue;
