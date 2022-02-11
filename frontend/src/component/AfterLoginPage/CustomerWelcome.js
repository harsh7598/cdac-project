import React, { useState } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { SiEventstore } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdEditCalendar,MdOutlinePreview } from "react-icons/md";
const CustomerWelcome = () => {
  const [addclass, setaddclass] = useState("");

  const state = [
    {
      id: 1,
      icon: <MdEditCalendar className="commonIcons2" />,
      heading: "Book Event",
      link: "bookevent"
    },
    {
      id: 2,
      icon: <MdOutlinePreview className="commonIcons2" />,
      heading: "View Event",
      link: "viewevent"
    },
    {
      id: 3,
      icon: <FaEdit className="commonIcons2" />,
      heading: "Edit Event Information",
      link: "editevent"
    }
  ];
  return (
    <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
      <div className="backgrnd bg-black">
      <div className=" py-5">
        <div className="container py-5 text-white my-5">

          <div className="row py-5">
            {state.map((info) => (

              <div className="col-12 col-md-4 py-5 px-4 h-100" key={info.id}>
                <Link className="nav-link text-white" to={info.link}>
                  <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                    <div>{info.icon}</div>
                    <div><h4 className="py-5 fs-2">{info.heading}</h4></div>
                    <div className="">{info.text}</div>
                  </div>
                </Link>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerWelcome;
