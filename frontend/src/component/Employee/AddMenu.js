import { useState } from "react";
import axios from "axios";
import { url } from '../common/constants';
import { useHistory } from "react-router-dom";

const AddMenu = () => {
    const [menuName, setmenuName] = useState("");
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [subCategory, setsubCategory] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));
    const history=useHistory();
    const HandleSubmit=()=>{
        const menu={
            menuName,
            price,
            category,
            subCategory
        }
        console.log(menu);
        axios.post(url + "/addmenu", menu,{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
            console.log('Printing Menu data', Response.data);
            history.goBack();

        })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 display-6">
                    Add Menu
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label for="name" className="form-label">Menu Name</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setmenuName(e.target.value) }}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label for="rate" className="form-label">rate</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setprice(e.target.value) }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="category" className="form-label">Category</label>
                    </div>
                    <div className="col">
                        <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                            <option value="VEG">Veg</option>
                            <option value="NON_VEG">Non-Veg</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="subcategory" className="form-label">sub Category</label>
                        </div>
                        <div className="col">
                            <select name="subcategory" id="subcategory" className=" input-fields-mod" onChange={(e) => { setsubCategory(e.target.value) }}>
                                <option value="RICE">Rice</option>
                                <option value="ROTI">Roti's</option>
                                <option value="CURRY">Curry's</option>
                                <option value="DESERT">Deserts</option>
                                <option value="DRINK">Drinks</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Submit</button>
                </div>
            </div>
        </div >
    )
}
export default AddMenu;