import React, { useState } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { SiEventstore } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdEditCalendar, MdOutlinePreview } from "react-icons/md";
const AvailbleServices = () => {
  const state = [
    {
      id: 1,
      icon: <MdEditCalendar className="commonIcons2" />,
      heading: "Caterer's",
      link: "viewcaterer"
    },
    {
      id: 2,
      icon: <MdOutlinePreview className="commonIcons2" />,
      heading: "Venue's",
      link: "viewvenue"
    },
    {
      id: 3,
      icon: <FaEdit className="commonIcons2" />,
      heading: "Studio's",
      link: "viewstudio"
    }
  ];
  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
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
  );
};

export default AvailbleServices;
