import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import UserNav from "../UserNav/UserNav";
import "./BookItems.css";

const BookedItems = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getBookedInfo")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <div className="row">
        <div className="col-md-2 mb-3">
          <UserNav />
        </div>
        {orders.length !=0 ? (
          <div className="col-md-10 mt-5">
            <h1>YOUR ORDERS</h1>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="px-3">Service name</th>
                    <th>Service price</th>
                    <th>Service description</th>
                    <th>In Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._key} scope="row">
                      <td scope="col">{order.sName}</td>
                      <td scope="col">{order.sPrice}</td>
                      <td scope="col">{order.sDesc}</td>
                      <td scope="col" className="text-danger">
                        Pending
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1 className="mt-5 text-center mx-auto">YOUR ORDER LIST IS EMPTY</h1>
        )}
      </div>
    </div>
  );
};

export default BookedItems;
