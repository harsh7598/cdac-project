import React, { useState } from "react";
import { Link } from "react-router-dom";
const EditEvent = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className="backgrnd position-absolute top-50 start-50 translate-middle w-100">
      {/* <div className={`container ${addclass}`} id="container"> */}
      <form className="Emplogin-form-in mt-3">
        <table className="col-12 mt-5">
          <thead>
            <tr>
              <td colSpan="2" className="fw-bold  pt-5 pb-3  display-6">
                Edit Event Details
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-start col-4 fs-4">Event Name:</td>
              <td><input type="text" className="my-2" placeholder="Enter Event Name" /></td>
            </tr>
            <tr>
              <td className="text-start col-2 fs-4">Event Type:</td>
              <td><input type="text" className="my-2" placeholder="Enter Event Type" /></td>
            </tr>
            <tr>
              <td className="text-start col-2 fs-4">Event Date:</td>
              <td><input type="date" className="my-2" placeholder="Enter Event Date" /></td>
            </tr>
            <tr>
              <td className="text-start col-2 fs-4">Event Starting Time:</td>
              <td><input type="time" className="my-2" placeholder="Enter Event Starting Time" /></td>
            </tr>
            <tr>
              <td className="text-start col-2 fs-4">Event Ending Time:</td>
              <td><input type="time" className="my-2" placeholder="Enter Event Ending Time" /></td>
            </tr>
            <tr>
              <td className="text-start col-2 fs-4">Expected Guest Count:</td>
              <td><input type="number" className="my-2" placeholder="Enter Expected Guest Count" /></td>
            </tr>
          </tbody>
        </table>
        <div className="d-grid col-10 mt-3 mx-auto">
          <Link className="btn bg-danger btn-lg text-white my-3 px-5 py-2 rounded-pill" to={""}>Proceed</Link>
        </div>
      </form>


    </div>
  );
};

export default EditEvent;
