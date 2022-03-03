import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link, Route, useHistory } from 'react-router-dom';
import NavSignOut from './NavSignOut';
import EditEvent from './EditEvent';
// import employeeService from '../services/employee.service';

const ViewEventUpdate = () => {
  
    const [events, setEvents] = useState([]);

    const history=useHistory();

    const init = () => {
        const token = JSON.parse(localStorage.getItem("jwttoken"));
        console.log(token);
        axios.get(url + "/regevents", { headers: { "authorization": `Bearer ${token}` } })
            .then(Response => {
                console.log('Printing Event data', Response.data);
                setEvents(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const handleUpdate = (event) => {
        localStorage.setItem('eventdata',JSON.stringify(event));
         history.push("/customer/bookevent/selectvenue")
    }

    useEffect(() => {
        init();
    }, []);


    return (

        <div className="forms-container">
                                            
            <div className="py-5 text-white my-5">
                <div colSpan="2" className="fw-bold pt-5 display-6">
                    Event Details
                </div>
                <div className="accordion" id="accordionExample">
                    {events.map((event) => (
                        <div className="accordion-item" key={event.id}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#collapse" + event.id} aria-expanded="false" aria-controls={"collapse" + event.id}>
                                    <h4 >Event Name: </h4><h4>{event.name}</h4>
                                    {/* <button className='btn btn-primary' onClick={()=>handleUpdate(event.id)}>Update</button> */}
                                </button>
                            </h2>
                            <div id={"collapse" + event.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
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
                                    </div>
                                    <br></br>
                                </div>
                                {/* <Link className='btn btn-primary' to={{
                                    pathname: "/customer/editevent",
                                    event
                                }}>UPDATE</Link> */}
                            <button className='btn btn-primary' onClick={()=>handleUpdate(event)}>Update</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                                Launch demo modal
                                                </button>
                                                <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered" role="document">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        ...
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
        </div>
    );
}

export default ViewEventUpdate;
