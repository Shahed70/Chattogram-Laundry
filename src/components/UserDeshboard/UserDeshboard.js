import React from "react";

import UserNav from "./UserNav/UserNav";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const promise = loadStripe(
  "pk_test_51IeK8WC70I0U8TmK9pWmYVaHeYBKkxQKI7o3Asko7qFoSIHr9ZiOoQcEtk8imZTPj6RhqhgJMRtqgAEIlPLE8Q2r00nZ8lq71R"
);
const UserDeshboard = () => {
  const [book, setBook] = useState({})
  const { id } = useParams();
  useEffect(() => {
    if(id){
      axios
      .get("https://serene-coast-10697.herokuapp.com/getServices/" + id)
      .then((res) => {
        setBook(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [id]);

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
              <label htmlFor="">Service Name</label>
              <input type="text" className="form-control" value={book.sName} />
            </div>
            <div className="form-group">
              <label htmlFor="">Service Price</label>
              <input type="text" className="form-control" value={book.sPrice} />
            </div>
          </form>
          <Elements stripe={promise}>
            <CheckOutForm bookItem={book} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default UserDeshboard;
