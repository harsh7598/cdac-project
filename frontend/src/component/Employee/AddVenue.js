import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
// import employeeService from '../services/employee.service';

const AddVenue = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [location, setlocation] = useState("")
    const [address, setaddress] = useState("")
    const [maxCapacity, setmaxCapacity] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")   
    const [contact, setcontact] = useState("")
    const [cost, setcost] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));

    const HandleAddVenue = () => {
        const venue={
            name,
            location,
            address,
            maxCapacity,
            description,
            category,
            contact,
            cost
        }
        axios.post(url + "/addvenue",venue,{headers:{"authorization":`Bearer ${token}`}})
            .then(response => {
                console.log('Printing Venues data', response.data);

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }


    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 display-6">
                    Add Venue
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="name" className="form-label">Venue Name</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setname(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="location" className="form-label">Location</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="location" onChange={(e) => { setlocation(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="address" className="form-label">Address</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="address" onChange={(e) => { setaddress(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="capacity" className="form-label">Capacity</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="capacity" onChange={(e) => { setmaxCapacity(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="category" className="form-label">Category</label>
                    </div>

                    <div className="col">
                        <select name="category" id="category" className=" input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                            <option value="RICE">Indoor</option>
                            <option value="ROTI">Outdoor</option>
                            <option value="CURRY">Lawn,s</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="rate" className="form-label">Contact</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcontact(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="rate" className="form-label">Cost</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="description" className="form-label">Description</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="description" onChange={(e) => { setdescription(e.target.value) }} />
                    </div>
                </div>
                <div className="py-5">
                <button type="submit" className="btn btn-primary" onClick={HandleAddVenue}>ADD Venue</button>
                </div>
            </div>
        </div >
    );
}

export default AddVenue;
