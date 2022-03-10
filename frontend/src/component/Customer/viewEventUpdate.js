import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link } from 'react-router-dom';
// import employeeService from '../services/employee.service';

const ViewEventUp = () => {

    const [events, setEvents] = useState([]);

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

    useEffect(() => {
        init();
    }, []);


    return (

        <div className="forms-container">
            <div className="py-5 text-white my-5">
                <div colSpan="2" className="fw-bold pt-5 display-6">
                    Event Details
                </div>
                {/* "#collapseOne" */}
                <div className="accordion" id="accordionExample">
                    {events.map((event) => (
                        <div className="accordion-item" key={event.id}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#collapse" + event.id} aria-controls={"collapse" + event.id}>
                                    <h4 >Event Name: </h4><h4>{event.name}</h4>
                                </button>
                            </h2>
                            <div id={"collapse" + event.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="bg-black py-2 px-2 border border-2 border-white">
                                        {/* <div className="event__box py-2 px-2 border border-2 border-white"> */}
                                        <h3 className="text-start p-3">Basic Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-starttext-white"><tbody>
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
                                            {/* <table className="col-10 table-bordered text-starttext-white"><tbody>
                                                <tr>
                                                    <td><h4>Name: </h4></td>
                                                    <td><h4>Address: </h4></td>
                                                    <td><h4>Capacity: </h4></td>
                                                    <td> <h4>Category: </h4></td>
                                                    <td><h4>Cost: </h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>{event.bookedVenue.name}</h4></td>
                                                    <td><h4>{event.bookedVenue.address}</h4></td>
                                                    <td><h4>{event.bookedVenue.maxCapacity}</h4></td>
                                                    <td><h4>{event.bookedVenue.category}</h4></td>
                                                    <td><h4>{event.bookedVenue.cost}</h4></td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                    <td><h4>Contact: </h4></td>
                                                    <td><h4>{event.bookedVenue.contact}</h4></td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                    <td><h4>Description: </h4></td>
                                                    <td><h4>{event.bookedVenue.description}</h4></td>
                                                </tr>
                                            </tbody></table> */}




                                            <table className="col-10 table-bordered text-starttext-white"><tbody>
                                                <tr>
                                                    <td><h4>Name: </h4></td>
                                                    <td><h4>{event.bookedVenue.name}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Location: </h4></td>
                                                    <td><h4>{event.bookedVenue.location}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Address: </h4></td>
                                                    <td><h4>{event.bookedVenue.address}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Capacity: </h4></td>
                                                    <td><h4>{event.bookedVenue.maxCapacity}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td> <h4>Category: </h4></td>
                                                    <td><h4>{event.bookedVenue.category}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Contact: </h4></td>
                                                    <td><h4>{event.bookedVenue.contact}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Cost: </h4></td>
                                                    <td><h4>{event.bookedVenue.cost}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Description: </h4></td>
                                                    <td><h4>{event.bookedVenue.description}</h4></td>
                                                </tr>

                                            </tbody></table>
                                        </div>

                                        <h3 className="text-start p-3">Food Menu List : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-starttext-white"><tbody>
                                                {event.menus.map((menu) => (
                                                    <tr><td>
                                                        <div key={menu.id}>
                                                            <h4 className="text-start px-3">{menu.menuName} <span className="text-secondary">(Price: {menu.price}/person)</span></h4>
                                                        </div>
                                                    </td></tr>
                                                ))}
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

                                        <Link className="btn btn-l mt-3" to={`/updateevent/${event.id}`}>Update</Link>
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

export default ViewEventUp;
