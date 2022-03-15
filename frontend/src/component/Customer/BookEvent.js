import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const BookEvent = () => {

    useEffect(() => {
        init();
        showmenulist();
    }, []);

    // states    
    const history = useHistory();
    // menu States
    const [category, setcategory] = useState("ALL");
    const [subCategory, setsubCategory] = useState("ALL");
    const [menuList, setMenuList] = useState([]);
    const [menus, setmenus] = useState([]);
    // genearal event details states
    const [name, setname] = useState("");
    const [type, settype] = useState("");
    const [date, setdate] = useState("");
    const [guestCount, setguestCount] = useState("");
    // media states
    const [Photography, setphotography] = useState(false);
    const [videography, setvideography] = useState(false);
    const [album, setalbum] = useState(false);
    const [drone, setdrone] = useState(false);
    const [crane, setcrane] = useState(false);
    // Vnues states
    const [Venues, setVenues] = useState([]);
    const [bookedVenue, setBookedvenue] = useState("");

    //functions 

    // menu handling functions
    const handleAddFormSubmit = (event) => {
        const newMenu = event;
        const newMenus = [...menus, newMenu];
        setmenus(newMenus);
    };

    const handleDeleteClick = (menuId) => {
        const newMenus = [...menus];
        const index = newMenus.findIndex((menu) => menu.id === menuId);
        newMenus.splice(index, 1);
        setmenus(newMenus);
    };

    // getting info at initial functions
    // getting venues
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
    //getting menus
    const showmenulist = () => {
        axios.get(url + "/menucategory", { params: { category, subCategory } }).then(Response => {
            console.log('Printing Menu data', Response.data);
            setMenuList(Response.data);
        })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    //register event
    const handleSubmit = () => {
        const eventdetails = {
            name,
            date,
            type,
            guestCount,
            Photography,
            videography,
            album,
            drone,
            crane,
            bookedVenue,
            menus
        }
        console.log(eventdetails);
        const token = JSON.parse(localStorage.getItem("jwttoken"));
        axios.post(url + "/eventinfo", eventdetails, { headers: { "authorization": `Bearer ${token}` } })
            .then(Response => {
                console.log('Printing event data', Response.data);
                history.push("/customer/welcome")
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <>
            <div className="forms-container">
                <div className="py-5 text-white my-5">
                    <div colSpan="2" className="fw-bold p-3 display-6">
                        Book an Event with Us
                    </div>
                    <div className="accordion " id="accordionExample">
                        {/* general Details item */}
                        <div className="accordion-item bg-black">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                    EVENT GENERAL DETAILS
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show bg-black" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <form className="col-10">
                                        <table className="col-12">

                                            <tbody>
                                                <tr>
                                                    <td className="text-start col-3 fs-4">Event Name:</td>
                                                    <td><input type="text" className="my-2" value={name} placeholder="Enter Event Name" onChange={(e) => { setname(e.target.value) }} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start col-2 fs-4">Event Type:</td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example" onChange={(e) => { settype(e.target.value) }}>
                                                            <option hidden>SELECT EVENT TYPE</option>
                                                            <option value="BIRTHDAYPARTY">BIRTHDAYPARTY</option>
                                                            <option value="ENGAGEMENT">ENGAGEMENT</option>
                                                            <option value="COLLAGE_EVENT">COLLAGE_EVENT</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start col-2 fs-4">Event Date:</td>
                                                    <td><input type="date" className="my-2" value={date} placeholder="Enter Event Date" onChange={(e) => { setdate(e.target.value) }} /></td>
                                                </tr>

                                                <tr>
                                                    <td className="text-start col-2 fs-4">Expected Guest Count:</td>
                                                    <td><input type="number" className="my-2" value={guestCount} placeholder="Enter Expected Guest Count" onChange={(e) => { setguestCount(e.target.value) }} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn btn-primary m-3 w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            NEXT
                                        </button>
                                        {/* <div className="d-grid col-10 mt-3 mx-auto">
                                        <button className="btn bg-danger btn-lg text-white my-3 px-5 py-2 rounded-pill" onClick={bookevent} >Proceed</button>
                                    </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* venue item */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
                                    SELECT VENUE
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse bg-black" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="scrollable">
                                        {Venues.map((venue) => (
                                            <div key={venue.id} className="border py-3 m-3 mb-4 event__box">
                                                {/* <div className="border">
                                                    <div className="grid-child">
                                                        <h4 className="text-start px-3">Name: {venue.name}</h4>
                                                        <h4 className="text-start px-3">Location: {venue.location}</h4>
                                                        <h4 className="text-start px-3">Address: {venue.address}</h4>
                                                        <h4 className="text-start px-3">Capacity: {venue.maxCapacity}</h4>
                                                        <h4 className="text-start px-3">Category: {venue.category}</h4>
                                                        <h4 className="text-start px-3">Contact: {venue.contact}</h4>
                                                        <h4 className="text-start px-3">Cost: {venue.cost}</h4>
                                                        <h4 className="text-start px-3">Description: {venue.description}</h4>
                                                        <button type="button" className="btn btn-warning mx -5 w-50 h-100" onClick={() => { setBookedvenue(venue) }}>Select</button>
                                                    </div>
                                                </div> */}
                                                <div className="grid-child d-flex justify-content-center ">
                                                    <table className="col-11 table-bordered text-white"><tbody>
                                                        <tr>
                                                            <td className="bg-white text-black"><h4>Name: </h4></td>
                                                            <td className="bg-white text-black"><h4>Location: </h4></td>
                                                            <td className="bg-white text-black"><h4>Capacity: </h4></td>
                                                            <td className="bg-white text-black"><h4>Category: </h4></td>
                                                            <td className="bg-white text-black"><h4>Contact: </h4></td>
                                                            <td className="bg-white text-black"><h4>Cost: </h4></td>
                                                        </tr>
                                                        <tr>
                                                            <td><h4>{venue.name}</h4></td>
                                                            <td><h4>{venue.location}</h4></td>
                                                            <td><h4>{venue.maxCapacity}</h4></td>
                                                            <td><h4>{venue.category}</h4></td>
                                                            <td><h4>{venue.contact}</h4></td>
                                                            <td><h4>{venue.cost}</h4></td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-black' colSpan={6}>-----------------------------------------------</td>
                                                        </tr>
                                                        <tr>
                                                        </tr>
                                                        <tr>
                                                            <td className="bg-white text-black" colSpan={3}><h4>Address: </h4></td>
                                                            <td className="bg-white text-black" colSpan={3}><h4>Description: </h4></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3}><h4>{venue.address}</h4></td>
                                                            <td colSpan={3}><h4>{venue.description}</h4></td>
                                                        </tr>
                                                        <tr>
                                                        </tr>
                                                        <tr>
                                                        </tr>
                                                    </tbody></table>
                                                </div>
                                                <button type="button" className="btn btn-primary mt-3 w-50 h-100 text-white" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                                                    onClick={() => { setBookedvenue(venue) }} >Select</button>
                                            </div>

                                        ))}
                                    </div>


                                </div>
                                <button className="btn btn-warning w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    BACK
                                </button>&nbsp;&nbsp;
                                {/* <button className="btn btn-warning collapsed w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    NEXT
                                </button> */}
                            </div>
                            {/* menu iterms */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                                        SELECT MENUS
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse bg-black" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="row col-12 text-white ">
                                            <div className="grid-container">
                                                <div className="grid-child border border-white">
                                                    <div className="scrollable">
                                                        <h4 className="top-fix" >Your Menu List</h4>
                                                        {menus.map((info) => {
                                                            return (
                                                                <div key={info.id}>
                                                                    <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                                                        <h5 className="mx-2">{info.menuName}</h5>
                                                                        <button className="btn-warning mx-3" onClick={() => handleDeleteClick(info.id)}>Remove</button>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <button className="btn btn-primary collapsed w-25 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        NEXT
                                                    </button>
                                                    {/* <button type="submit" className="btn-danger mx-5 w-50 mt-2 py-1" onClick={submitMenu}>submit</button> */}
                                                </div>
                                                <div className="grid-child">
                                                    <span className="row justify-content-center">
                                                        <table className="w-75 mb-2">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                                                                            <option value="ALL">All</option>
                                                                            <option value="VEG">Veg</option>
                                                                            <option value="NON_VEG">Non-Veg</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select name="subcategory" id="subcategory" className="input-fields-mod" onChange={(e) => { setsubCategory(e.target.value) }}>
                                                                            <option value="ALL">All</option>
                                                                            <option value="RICE">Rice</option>
                                                                            <option value="ROTI">Roti's</option>
                                                                            <option value="CURRY">Curry's</option>
                                                                            <option value="DESERT">Deserts</option>
                                                                            <option value="DRINK">Drinks</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <button type="button" className="btn btn-primary" onClick={showmenulist}><BsSearch /> Search</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </span>
                                                    <div className="scrollable">
                                                        {menuList.map((m) => (
                                                            <div key={m.id}>
                                                                <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                                                    {/* <h5 className="mx-2 border " >{m.id}</h5> */}
                                                                    <table className="col-8">
                                                                        <tbody><tr>
                                                                            <td className="text-start col-6"><h5 className="mx-2 " >{m.menuName}</h5></td>
                                                                            <td className="text-end col-2"><h5 className="mx-2 " >{m.price}</h5></td>
                                                                            <td></td>
                                                                        </tr></tbody>
                                                                    </table>
                                                                    {/* <h5 className="mx-2 border" >{m.category}</h5>
                                                                 <h5 className="mx-2 border" >{m.subCategory}</h5> */}
                                                                    <button type="submit" className="btn-warning mx-5 w-25" onClick={() => handleAddFormSubmit(m)}>Add</button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-warning w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        BACK
                                    </button>
                                    {/* <button className="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        NEXT
                                    </button> */}
                                </div>
                            </div>
                            {/* media Items */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
                                        SELECT MEDIA
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse bg-black" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body d-flex justify-content-center">
                                        <div className="row col-10">
                                            <label className="event__box border w-100 h4 py-3 my-2" htmlFor="photography">
                                                <input type="checkbox" name="photography" id="photography" className="h-25" onChange={() => setphotography(!Photography)} />Photography</label>
                                            <label className="event__box border w-100 h4 py-3 my-2" htmlFor="videography">
                                                <input type="checkbox" name="videography" id="videography" className="h-25" onChange={() => setvideography(!videography)} />Videography</label>
                                            <label className="event__box border w-100 h4 py-3 my-2" htmlFor="album">
                                                <input type="checkbox" name="album" id="album" className="h-25" onChange={() => setalbum(!album)} />Album</label>
                                            <label className="event__box border w-100 h4 py-3 my-2" htmlFor="drone">
                                                <input type="checkbox" name="drone" id="drone" className="h-25" onChange={() => setdrone(!drone)} />Drone</label>
                                            <label className="event__box border w-100 h4 py-3 my-2" htmlFor="crane">
                                                <input type="checkbox" name="crane" id="crane" className="h-25" onChange={() => setcrane(!crane)} />Crane</label>
                                        </div>

                                    </div>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                        BACK
                                    </button>
                                    <button className="btn btn-primary" onClick={handleSubmit}>submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookEvent;
