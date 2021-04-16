import React from "react";

import UserNav from "./UserNav/UserNav";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
const promise = loadStripe(
  "pk_test_51IeK8WC70I0U8TmK9pWmYVaHeYBKkxQKI7o3Asko7qFoSIHr9ZiOoQcEtk8imZTPj6RhqhgJMRtqgAEIlPLE8Q2r00nZ8lq71R"
);
const UserDeshboard = () => {
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>

        <div className="col-md-5 offset-md-1 mt-5">
          <h1>MAKE PAYMENT</h1>
          <form action="" className="mt-3">
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Service</label>
              <input type="text" className="form-control" />
            </div>
            <div></div>
          </form>
          <Elements stripe={promise}>
            <CheckOutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default UserDeshboard;
