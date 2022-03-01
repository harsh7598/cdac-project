import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { url } from '../common/constants';
// import employeeService from '../services/employee.service';

const ViewEvent = () => {

  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [menus, setMenus] = useState([]);

  const init = () => {
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    axios.get(url + "/regevents", { headers: { "authorization": `Bearer ${token}` } })
      .then(Response => {
        console.log('Printing Event data', Response.data);
        setEvents(Response.data);
        // {events.map((event) => (
        //   setVenues(...venues,event.bookedVenue),
        //   setMenus(...menus,(event.menus))
        // ))}
        // console.log(venues);
        // console.log(menus);
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
          Booked Event Details
        </div>
        <div className="py-4 list-items">
          {events.map((event) => (

            <div key={event.id}>
              {/* <Link className="nav-link text-white py-1" to={caterer.link}> */}
              <div className="event__box py-2 px-2 border border-2 border-white">

                <h3 className="text-start px-3">Basic Details : </h3>
                <table className="col-8 table-bordered text-starttext-white"><tbody>
                  <tr>
                    <td><h4 >Event Name: </h4></td>
                    <td><h4>{event.name}</h4></td>
                  </tr>
                  <tr>
                    <td><h4 >Event Type: </h4></td>
                    <td><h4>{event.type}</h4></td>
                  </tr>
                  <tr>
                    <td><h4 >Event Date: </h4>
                    </td><td><h4>{event.date}</h4></td>
                  </tr>
                  <tr>
                    <td><h4 >Guest Count:</h4></td>
                    <td><h4>{event.guestCount}</h4></td>
                  </tr>
                </tbody></table>
                <h3  >Venue Details : </h3>
                <h4>Name: {event.bookedVenue.name}</h4>
                <h4>Location: {event.bookedVenue.location}</h4>
                <h4>Address: {event.bookedVenue.address}</h4>
                <h4>Capacity: {event.bookedVenue.maxCapacity}</h4>
                <h4>Category: {event.bookedVenue.category}</h4>
                <h4>Contact: {event.bookedVenue.contact}</h4>
                <h4>Cost: {event.bookedVenue.cost}</h4>
                <h4>Description: {event.bookedVenue.description}</h4>

                <h3>Food Menu List : </h3>
                {event.menus.map((menu) => (
                  <div key={menu.id}>
                    <h4 className="text-start px-3">{menu.menuName} <span className="text-secondary">(Price: {menu.price}/person)</span></h4>
                  </div>


                ))}

                <h3 className="text-start px-3">Media Details : </h3>
                <h4 className="text-start px-3">Photography: {event.photography.toString()}</h4>
                <h4 className="text-start px-3">Videography: {event.videography.toString()}</h4>
                <h4 className="text-start px-3">Album: {event.album.toString()}</h4>
                <h4 className="text-start px-3">Drone Shoot: {event.drone.toString()}</h4>
                <h4 className="text-start px-3">Crane Shoot: {event.crane.toString()}</h4>




                {/* <h3  className="text-start px-3">Basic Details : </h3>
                <table><tbody>
                <tr><h4 >Event Name: {event.name}</h4>
                <h4 >Event Type: {event.type}</h4>
                <h4 >Event Date: {event.date}</h4>
                <h4 >Guest Count: {event.guestCount}</h4>
                </tbody></table>
                <h3  >Venue Details : </h3>
                <h4>Name: {event.bookedVenue.name}</h4>
                <h4>Location: {event.bookedVenue.location}</h4>
                <h4>Address: {event.bookedVenue.address}</h4>
                <h4>Capacity: {event.bookedVenue.maxCapacity}</h4>
                <h4>Category: {event.bookedVenue.category}</h4>
                <h4>Contact: {event.bookedVenue.contact}</h4>
                <h4>Cost: {event.bookedVenue.cost}</h4>
                <h4>Description: {event.bookedVenue.description}</h4>

                <h3>Food Menu List : </h3>
                {event.menus.map((menu) => (
                  <div key={menu.id}>
                    <h4 className="text-start px-3">{menu.menuName} <span className="text-secondary">(Price: {menu.price}/person)</span></h4>
                  </div>


                ))}

                <h3 className="text-start px-3">Media Details : </h3>
                <h4 className="text-start px-3">Photography: {event.photography.toString()}</h4>
                <h4 className="text-start px-3">Videography: {event.videography.toString()}</h4>
                <h4 className="text-start px-3">Album: {event.album.toString()}</h4>
                <h4 className="text-start px-3">Drone Shoot: {event.drone.toString()}</h4>
                <h4 className="text-start px-3">Crane Shoot: {event.crane.toString()}</h4> */}

              </div>
              {/* </Link> */}
              <br></br>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewEvent;
