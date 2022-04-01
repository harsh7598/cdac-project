import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
// import employeeService from '../services/employee.service';

const AddCaters = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [contactNumber, setcontactNumber] = useState("")
    const [speciality, setspeciality] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));

    const HandleAddCaters = () => {
        const cater={
            name,
            contactNumber,
            speciality
        }
        console.log(cater)
        axios.post(url + "/addcater",cater,{headers:{"authorization":`Bearer ${token}`}})
            .then(response => {
                console.log('Printing Caters data', response.data);

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
            
    }


    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 display-6">
                    Add Cater
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="name" className="form-label">Cater Name</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setname(e.target.value) }} />
                    </div>
                </div>
            
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="contact" className="form-label">Contact</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="contact" onChange={(e) => { setcontactNumber(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="speciality" className="form-label">Speciality</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="speciality" onChange={(e) => { setspeciality(e.target.value) }} />
                    </div>
                </div>
                <div className="py-5">
                <button type="submit" className="btn btn-primary" onClick={HandleAddCaters}>ADD Studio</button>
                </div>
            </div>
        </div >
    );
}

export default AddCaters;
