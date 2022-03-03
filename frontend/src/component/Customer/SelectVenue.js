import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
// import employeeService from '../services/employee.service';

const SelectVenue = () => {
  const history=useHistory();
  const [Venues, setVenues] = useState([]);
  const init = () => {
    axios.get(url + "/venue")
      .then(response => {
        console.log('Printing Venues data', response.data);
        setVenues(response.data);
        
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  const HandleVenue=(venueDetails)=>{
    localStorage.setItem('submitVenue', JSON.stringify(venueDetails));
    history.push("/customer/bookevent/selectmenu")
  }

  useEffect(() => {
    init();
  }, []);

  
  return (
    <div className="forms-container">
      <div className="py-5 text-white my-5">
        <div className="fw-bold pt-5 display-6">
          Select a Venue
        </div>
        <div className="py-4 list-items">
          {Venues.map((venue) => (

            <div key={venue.id}>
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
                  <button type="button" className="btn btn-warning mx -5 w-50 h-100" onClick={()=>{HandleVenue(venue)}}>Add</button>
                </div>
              </div>


              <br></br>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectVenue;
