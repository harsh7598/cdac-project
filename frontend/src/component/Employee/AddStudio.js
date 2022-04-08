import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
// import employeeService from '../services/employee.service';

const AddStudio = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("")

    const [photographycost, setphotographycost] = useState("")
    const [videographycost, setvideographycost] = useState("")
    const [albumcost, setalbumcost] = useState("")
    const [dronecost, setdronecost] = useState("")
    const [cranecost, setcranecost] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));

    const HandleAddStudio = () => {
        const studio={
            name,
            contact,
            photographycost,
            videographycost,
            albumcost,
            dronecost,
            cranecost
        }
        console.log(studio)
        axios.post(url + "/addstudio",studio,{headers:{"authorization":`Bearer ${token}`}})
            .then(response => {
                console.log('Printing studio data', response.data);

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
            
    }


    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 display-6">
                    Add Studio
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="name" className="form-label">Studio Name</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setname(e.target.value) }} />
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
                        <label htmlFor="rate" className="form-label">Photography Cost</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setphotographycost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="rate" className="form-label">Videography Cost</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setvideographycost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="rate" className="form-label">Album Cost</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setalbumcost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="rate" className="form-label">Drone Cost</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setdronecost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="rate" className="form-label">Crane Cost</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcranecost(e.target.value) }} />
                    </div>
                </div>
                <div className="py-5">
                <button type="submit" className="btn btn-primary" onClick={HandleAddStudio}>ADD Studio</button>
                </div>
            </div>
        </div >
    );
}

export default AddStudio;
