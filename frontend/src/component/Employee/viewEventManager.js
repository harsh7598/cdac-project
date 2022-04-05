import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
// import employeeService from '../services/employee.service';

const ViewEventManager = () => {

    const [events, setEvents] = useState([]);
    const role = localStorage.getItem("role");
    const [forassign, setForAssign] = useState("");
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const [statusback, setStatusBack] = useState([]);

    const init = () => {
        const token = JSON.parse(localStorage.getItem("jwttoken"));
        console.log(token);
        console.log(role)
        if (role == "MANAGER") {
            console.log("manager")
            setForAssign("EMPLOYEES");
        }
        if (role == "ADMIN") {
            console.log("admin")
            setForAssign("MANAGERS");
        }
        
        axios.get(url + "/regevents", { headers: { "authorization": `Bearer ${token}` } })
        .then(Response => {
            console.log('Printing Event data', Response.data);
            setEvents(Response.data);
            Response.data.map(ev=>{
                if(ev.status=="Waiting For Approval"){
                    setStatusBack("accordion-button collapsed bg-warning");
                    console.log("waiting for approval");
                }
                if(ev.status=="Waiting For Payment"){
                    setStatusBack("accordion-button collapsed bg-info");
                    console.log("waiting for payment");
                }
                if(ev.status=="Approved"){
                    setStatusBack("accordion-button collapsed bg-success")
                }
                });
            
            
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }

    
    const Handledone = (event) => {
        axios.put(url + "/eventinfo", event, { headers: { "authorization": `Bearer ${token}` } })
        .then(Response => {
            console.log('Printing Menu data', Response.data);
            init();
        })
        .catch(error => {
            console.log('Something went wrong', error);
        });
    }
    
    useEffect(() => {
        init();
       
    }, []);


    return (

        <div className="forms-container">
            <div className="py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 display-6">
                    Event Details
                </div>
                {/* "#collapseOne" */}
                <div className="accordion" id="accordionExample">
                    {events.map((event) => (
                        <div className="accordion-item m-3" key={event.id}>
                            <h2 className="accordion-header" id="headingOne">
                            <button className={statusback} type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#collapse" + event.id} aria-controls={"collapse" + event.id}>
                                {/* <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#collapse" + event.id} aria-controls={"collapse" + event.id}> */}
                                    <h4 className="col-md-5">{event.name}</h4>
                                <h5 className="col-md-2 row justify-content-center align-items-center">{event.status}</h5>

                                    <Link
                                        className="navbar-toggler border-transparent "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        to="#n"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <AiOutlineMenu  />
                                    </Link>
                                        <div className="collapse navbar-collapse" id="n">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <Link to="/eventmanager" className="nav-link">
                                                        Home
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                </button>
                            </h2>


                            <div id={"collapse" + event.id} className="accordion-collapse collapse bg-black" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" id="fordownload">
                                    <div className="bg-black py-2 px-2 border border-2 border-white"  >
                                        {/* <div className="event__box py-2 px-2 border border-2 border-white"> */}
                                        <h3 className="text-start p-3">Basic Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-white"><tbody>
                                                <tr>
                                                    <td className="bg-white text-black"><h4 >Event Name: </h4></td>
                                                    <td className="bg-white text-black"><h4 >Event Type: </h4></td>
                                                    <td className="bg-white text-black"><h4 >Event Date: </h4></td>
                                                    <td className="bg-white text-black"><h4 >Guest Count:</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>{event.name}</h4></td>
                                                    <td><h4>{event.type}</h4></td>
                                                    <td><h4>{event.date}</h4></td>
                                                    <td><h4>{event.guestCount}</h4></td>
                                                </tr>
                                            </tbody></table>

                                        </div>
                                        <h3 className="text-start p-3">Venue Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-starttext-white"><tbody>
                                                <tr>
                                                    <td className="bg-white text-black"><h4>Name: </h4></td>
                                                    <td className="bg-white text-black"><h4>Capacity: </h4></td>
                                                    <td className="bg-white text-black"><h4>Category: </h4></td>
                                                    <td className="bg-white text-black"><h4>Contact: </h4></td>
                                                    <td className="bg-white text-black"><h4>Cost: </h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>{event.bookedVenue.name}</h4></td>
                                                    <td><h4>{event.bookedVenue.maxCapacity}</h4></td>
                                                    <td><h4>{event.bookedVenue.category}</h4></td>
                                                    <td><h4>{event.bookedVenue.contact}</h4></td>
                                                    <td><h4>{event.bookedVenue.cost}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td className='text-black' colSpan={5}>-----------------------------------------------</td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                    <td className="bg-white text-black" colSpan={2}><h4>Address: </h4></td>
                                                    <td className="bg-white text-black" colSpan={3}><h4>Description: </h4></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}><h4>{event.bookedVenue.address}</h4></td>
                                                    <td colSpan={3}><h4>{event.bookedVenue.description}</h4></td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                </tr>
                                            </tbody></table>
                                        </div>

                                        <h3 className="text-start p-3">Food Menu List : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-starttext-white"><tbody>
                                                <tr><td>
                                                    {event.menus.map((menu) => (
                                                        <div key={menu.id}>
                                                            <h4 className="text-start px-3">{menu.menuName} <span className="text-secondary">(Price: {menu.price}/person)</span></h4>
                                                        </div>
                                                    ))}
                                                </td></tr>
                                            </tbody></table>
                                        </div>
                                        <h3 className="text-start p-3">Media Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-starttext-white"><tbody>
                                                <tr><td className="bg-white text-black"><h4>Photography: </h4></td>
                                                    <td className="bg-white text-black"><h4>Videography: </h4></td>
                                                    <td className="bg-white text-black"><h4>Album: </h4></td>
                                                    <td className="bg-white text-black"><h4>Drone Shoot: </h4></td>
                                                    <td className="bg-white text-black"><h4>Crane Shoot: </h4></td>
                                                </tr>


                                                <tr>
                                                    <td><h4>{event.photography ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.videography ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.album ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.drone ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.crane ? "Yes" : "No"}</h4></td>
                                                </tr>
                                            </tbody></table>
                                        </div>

                                        <select name="status" id="status" className="input-fields-mod" defaultValue={event.status} onChange={(e) => { event.status = e.target.value; Handledone(event)}}>
                                            <option value="Waiting For Approval">Waiting For Approval</option>
                                            <option value="Waiting For Payment">Waiting For Payment</option>
                                            <option value="Approved">Approved</option>

                                        </select>
                                        <Link className="btn btn-info" to={`/updateevent/${event.id}`}>Update</Link>
                                        <Link className="btn btn-info" to={`/assigncaters/${event.id}`}>assign Caters</Link>
                                        <Link className="btn btn-info" to={`/assignemployee/${event.id}`}>assign {forassign}</Link>
                                        <Link className="btn btn-info" to={`/viewassignemployee/${event.id}`}>view assign {forassign}</Link>
                                        <Link className="btn btn-info" to={`/assignstudio/${event.id}`}>assign Studio</Link>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewEventManager;
