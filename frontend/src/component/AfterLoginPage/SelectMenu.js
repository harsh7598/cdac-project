import React, {useEffect, useState } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from '../common/constants';

const SelectMenu = () => {
    const [addclass, setaddclass] = useState("");
    const [category, setcategory] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [menus, setMenus] = useState([]);

    const init = () => {
        axios.get(url + "/menu")
            .then(Response => {
                console.log('Printing Menu data', Response.data);
                setMenus(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const [menulist, setmenulist] = useState([]);
    const [menu, setmenu] = useState({
        id: '',
        heading: ''
    });

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;
    //     console.log(fieldName);
    //     console.log(fieldValue);
    //     const newFormData = { ...menu };
    //     newFormData[fieldName] = fieldValue;

    //     setmenu(newFormData);
    // };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        console.log(menu.id);
        const newContact = {
            id: menu.id,
            heading: menu.heading,
        };
        console.log(newContact.id);
        const newContacts = [...menulist, newContact];
        setmenulist(newContacts);
    };
    // const handleDeleteClick = (contactId) => {
    //     const newContacts = [...contacts];

    //     const index = contacts.findIndex((contact) => contact.id === contactId);

    //     newContacts.splice(index, 1);

    //     setContacts(newContacts);
    // };

    const [state, setstate] = useState([
        {
            id: 1,
            heading: "Book Event"
        },
        {
            id: 2,
            heading: "View Event"
        },
        {
            id: 3,
            heading: "Edit Event Information"
        }
    ]);

    useEffect(() => {
        init();
    }, []);

    return (

        <div className="forms-container">
            <div className="row col-12 py-5 text-white my-5">

                <div className="fw-bold pt-5 display-6">
                    Select Menu
                </div>
                <hr className="m-4 pt-1" />
                <div className="grid-container">
                    <div className="grid-child border border-white ">
                        <h4>Your Menu List</h4>
                        {menulist.map((info) => (

                            <div key={info.id}>
                                <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                    <h5 className="mx-2">{info.heading}</h5>
                                    <button className="btn-warning mx-3">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid-child">
                        <span className="row justify-content-center">
                            <table className="w-75 mb-3"><tr><td>
                                <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                                    <option value="" disabled selected hidden>Choose Category</option>
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                </select></td><td>
                                    <select name="subcategory" id="subcategory" className="input-fields-mod" onChange={(e) => { setsubcategory(e.target.value) }}>
                                        <option value="" disabled selected hidden>Choose Sub-Category</option>
                                        <option value="Roti">Roti's</option>
                                        <option value="Curry">Curry's</option>
                                        <option value="Desert">Deserts</option>
                                        <option value="Drink">Drinks</option>
                                    </select>
                                </td></tr></table>
                        </span>
                        {menus.map((m) => (

                            <div key={menus.id} >

                                <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">

                                    <h5 className="mx-2" >{m.MenuName}</h5>
                                    <h5 className="mx-2" >{m.price}</h5>
                                    <button type="submit" className="btn-warning mx-5 w-25" onClick={handleAddFormSubmit}>Add</button>

                                </div>

                            </div>


                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectMenu;
