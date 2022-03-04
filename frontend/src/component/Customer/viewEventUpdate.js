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

//     var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

    return (

        <div className="forms-container">
            <div className='py-5'>hiii</div>
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
