import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link } from 'react-router-dom';


const ViewEmployee = () => {
    const [Employee, setEmployee] = useState([]);


    const HandleRemove = (id) => {
        axios.delete(url + "/deleteemployee/" + id).then(Response => {
            console.log('delete Employee successfully');
            init();
        })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const init = () => {
        axios.get(url + "/allemployees")
            .then(Response => {
                console.log('Printing Employee data', Response.data);
                setEmployee(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    };
    useEffect(() => {
        init();
    }, []);
    return (

        <div className="forms-container">
            <div className="py-5 text-white my-5">
                <div colSpan="2" className="fw-bold pt-5 display-6">
                    Employees
                </div>
                <Link className='btn btn-l' to='/regemployee' >register Employee</Link>
                <div className="py-4 list-items">
                    {Employee.map((emp) => (
                        <div key={emp.id}>
                            <div className="event__box py-2 px-2 border border-2 border-white">
                                <h4 className="text-start px-3">Id: {emp.id}</h4>
                                <h4 className="text-start px-3">Name: {emp.name}</h4>
                                <h4 className="text-start px-3">Contact: {emp.email}</h4>
                            </div>
                            <button className='btn-l' onClick={() => { HandleRemove(emp.id) }}>Remove Employee</button>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewEmployee;
