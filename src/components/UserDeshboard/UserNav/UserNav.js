import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";
const UserNav = () => {
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
              <i className="fas fa-shopping-cart"></i>
                <Link className="nav-link" to="/userdeshboard">
                  Place Order
                </Link>
              </div>
            </li>
            <li className="nav-item pl-3 py-1">
              <div className="d-flex">
              <i className="fas fa-shopping-basket"></i>
                <Link className="nav-link" to="/book">
                  Booked Items
                </Link>
              </div>
            </li>
            <li className="nav-item pl-3 py-1">
              <div className="d-flex">
              <i className="fas fa-comment-alt"></i>
                <Link className="nav-link" to="/reviews">
                  Review
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
