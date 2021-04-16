import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import UserNav from "../UserNav/UserNav";
import './BookItems.css'

const BookedItems = () => {
  const [order, setOrder] = useState({});
  console.log(order);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4000/getServices/" + id)
      .then((res) => {
        setOrder(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(id);
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <div className="row">
        <div className="col-md-2 mb-3">
          <UserNav />
        </div>
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
                <tr scope="row">
                  <td scope="col">{order.sName}</td>
                  <td scope="col">{order.sPrice}</td>
                  <td scope="col">{order.sDesc}</td>
                  <td scope="col" className="text-danger">
                    Pending
                  </td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedItems;
