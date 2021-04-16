import React from "react";
import "./HowServiceWorks.css";
const HowServiceWorks = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="py-5">How Our Service Works</h1>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-md-3 pb-5">
          <div className="icon-box text-center ">
            <i className="fas fa-mobile-alt fa-5x"></i>
            <h4 className="mt-3">Sign Up</h4>
          </div>
          <hr />
          <p>
            All members receive bonuses and/or discounts. Sign up for more
            information.
          </p>
        </div>
        <div className="col-md-3 pb-5">
          <div className="icon-box text-center ">
            <i className="fas fa-people-carry fa-5x"></i>
            <h4 className="mt-3">Pick Up</h4>
          </div>
          <hr />
          <p>
            If you are in an urgent need of laundry, we can come right to you
            for a pick-up.
          </p>
        </div>
        <div className="col-md-3 pb-5">
          <div className="icon-box text-center">
            <i className="fas fa-hands-wash fa-5x"></i>
            <h4 className="mt-3">Cleaning</h4>
          </div>
          <hr />
          <p>
            We use premium materials, technologies and guarantee treatment with
            care.
          </p>
        </div>
        <div className="col-md-3 pb-1">
          <div className="icon-box text-center ">
            <i className="fas fa-tshirt fa-5x"></i>
            <h4 className="mt-3">Delivery</h4>
          </div>
          <hr />
          <p>
            Free delivery for every order upon prior request within 24 hours
            after cleaning
          </p>
        </div>
      </div>
    </>
  );
};

export default HowServiceWorks;
