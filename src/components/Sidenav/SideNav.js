import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";
const SideNav = () => {
  return (
    <div>
      <div className="side-nav">
        <div className="">
          <Link to="/">
            <h5 className="text-center">
              CHATTOGRAM <br />
              LAUNDRY
            </h5>
          </Link>
          <ul className="nav flex-column bg-dark side-nav">
            <li className="nav-item pl-3 py-1">
              <div className="d-flex">
                <i className="fas fa-bars fas-icon"></i>
                <Link className="nav-link active" to="/deshboard">
                  Order list
                </Link>
              </div>
            </li>
            <li className="nav-item pl-3 py-1">
              <div className="d-flex">
                <i className="fas fa-plus-square fas-icon"></i>
                <Link className="nav-link" to="/service">
                  Add Service
                </Link>
              </div>
            </li>
            <li className="nav-item pl-3 py-1">
              <div className="d-flex">
                <i className="fas fa-user-lock fas-icon"></i>
                <Link className="nav-link" to="addAdmin">
                  Make admin
                </Link>
              </div>
            </li>
            <li className="nav-item pl-3 py-1">
              <div className="d-flex">
                <i className="fas fa-arrows-alt fas-icon"></i>
                <Link className="nav-link" to="manageService">
                  Manage services
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
